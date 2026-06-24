import { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'
import { createToken } from '@/lib/jwt'
import { registerSchema, validationError } from '@/lib/validators'

export function OPTIONS() {
  return optionsResponse()
}

export async function POST(request: NextRequest) {
  const body = registerSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  const existingUser = db.users.findByEmail(body.data.email)
  if (existingUser) {
    return jsonResponse({ message: 'Email already exists.' }, { status: 409 })
  }

  const user = db.users.create({
    name: body.data.name,
    email: body.data.email,
    password: bcrypt.hashSync(body.data.password, 10),
  })

  const authUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  }

  return jsonResponse(
    {
      token: createToken(authUser),
      user: authUser,
    },
    { status: 201 },
  )
}
