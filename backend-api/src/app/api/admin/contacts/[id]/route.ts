import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'

type RouteContext = {
  params: Promise<{
    id: string
  }>
}

export function OPTIONS() {
  return optionsResponse()
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  const { id } = await context.params
  const message = db.contacts.markRead(id)

  if (!message) {
    return jsonResponse({ message: 'Contact message not found.' }, { status: 404 })
  }

  return jsonResponse({ data: message })
}
