import { NextRequest } from 'next/server'
import { getBearerToken } from '@/lib/cors'
import { hasRole, verifyToken } from '@/lib/jwt'

export function requireAdmin(request: NextRequest) {
  const token = getBearerToken(request)
  const user = token ? verifyToken(token) : null
  return hasRole(user, 'admin')
}
