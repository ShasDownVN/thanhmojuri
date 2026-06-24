import { create } from 'zustand'
import type { AuthUser } from '../services/api'

type AuthState = {
  token: string
  user: AuthUser | null
  lastUser: AuthUser | null
  sessionStatus: 'active' | 'inactive'
  setSession: (token: string, user: AuthUser) => void
  logout: () => void
}

function readStoredUser(key: string) {
  const rawUser = localStorage.getItem(key)

  if (!rawUser) return null

  try {
    return JSON.parse(rawUser) as AuthUser
  } catch {
    localStorage.removeItem(key)
    return null
  }
}

const storedToken = localStorage.getItem('mojuri_admin_token') ?? ''
const storedUser = readStoredUser('mojuri_admin_user')
const storedLastUser = readStoredUser('mojuri_last_auth_user')

export const useAuthStore = create<AuthState>((set) => ({
  token: storedToken,
  user: storedUser,
  lastUser: storedLastUser ?? storedUser,
  sessionStatus: storedToken && storedUser && localStorage.getItem('mojuri_auth_status') !== 'inactive' ? 'active' : 'inactive',
  setSession: (token, user) => {
    localStorage.setItem('mojuri_admin_token', token)
    localStorage.setItem('mojuri_admin_user', JSON.stringify(user))
    localStorage.setItem('mojuri_last_auth_user', JSON.stringify(user))
    localStorage.setItem('mojuri_auth_status', 'active')
    set({ token, user, lastUser: user, sessionStatus: 'active' })
  },
  logout: () => {
    const currentUser = readStoredUser('mojuri_admin_user')
    localStorage.removeItem('mojuri_admin_token')
    localStorage.removeItem('mojuri_admin_user')
    if (currentUser) {
      localStorage.setItem('mojuri_last_auth_user', JSON.stringify(currentUser))
    }
    localStorage.setItem('mojuri_auth_status', 'inactive')
    set((state) => ({ token: '', user: null, lastUser: currentUser ?? state.lastUser, sessionStatus: 'inactive' }))
  },
}))
