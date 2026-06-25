import type { AuthUser } from './api'

export const DEMO_ADMIN_TOKEN = 'demo-admin-token'

export const demoAdminUser: AuthUser = {
  id: 'u-001',
  email: 'admin@mojuri.local',
  name: 'Mojuri Admin',
  role: 'admin',
}

export function isDemoAdminLogin(email: string, password: string) {
  return email.trim().toLowerCase() === 'admin@mojuri.local' && password === 'admin123'
}

export function isDemoAdminToken(token: string) {
  return token === DEMO_ADMIN_TOKEN
}
