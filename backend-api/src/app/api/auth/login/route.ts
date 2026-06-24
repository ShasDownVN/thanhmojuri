import { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'
import { createToken } from '@/lib/jwt'
import { loginSchema, validationError } from '@/lib/validators'

export function OPTIONS() {
  return optionsResponse()
}

export async function POST(request: NextRequest) {
  const body = loginSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  const { email, password } = body.data
  const user = db.users.findByEmail(email)

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return jsonResponse({ message: 'Invalid email or password.' }, { status: 401 })
  }

  const authUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  }

  return jsonResponse({
    token: createToken(authUser),
    user: authUser,
  })
}
