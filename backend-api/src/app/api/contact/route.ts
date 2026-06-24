import { NextRequest } from 'next/server'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'
import { contactSchema, validationError } from '@/lib/validators'

export function OPTIONS() {
  return optionsResponse()
}

export async function POST(request: NextRequest) {
  const body = contactSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  return jsonResponse(
    {
      data: db.contacts.create(body.data),
    },
    { status: 201 },
  )
}
