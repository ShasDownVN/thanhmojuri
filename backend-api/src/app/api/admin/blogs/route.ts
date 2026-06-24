import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'
import { blogSchema, validationError } from '@/lib/validators'

export function OPTIONS() {
  return optionsResponse()
}

export function GET(request: NextRequest) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  return jsonResponse({
    data: db.blogs.findMany(true),
  })
}

export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  const body = blogSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  return jsonResponse(
    {
      data: db.blogs.create({
        ...body.data,
      }),
    },
    { status: 201 },
  )
}
