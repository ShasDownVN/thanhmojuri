import crypto from 'crypto'
import type { AuthUser, Role } from '@/types'

type JwtPayload = AuthUser & {
  exp: number
}

const secret = process.env.JWT_SECRET ?? 'dev-secret-change-me'

function base64url(input: Buffer | string) {
  return Buffer.from(input).toString('base64url')
}

function sign(input: string) {
  return crypto.createHmac('sha256', secret).update(input).digest('base64url')
}

export function createToken(user: AuthUser) {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = base64url(
    JSON.stringify({
      ...user,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    }),
  )
  const signature = sign(`${header}.${payload}`)

  return `${header}.${payload}.${signature}`
}

export function verifyToken(token: string): JwtPayload | null {
  const [header, payload, signature] = token.split('.')
  if (!header || !payload || !signature) return null

  const expected = sign(`${header}.${payload}`)
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null

  const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString()) as JwtPayload
  if (!decoded.exp || decoded.exp < Math.floor(Date.now() / 1000)) return null

  return decoded
}

export function hasRole(user: JwtPayload | null, role: Role) {
  return user?.role === role
}
