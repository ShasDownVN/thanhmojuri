import { NextRequest } from 'next/server'
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

export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params
  const order = db.orders.findById(id)

  if (!order) {
    return jsonResponse({ message: 'Order not found.' }, { status: 404 })
  }

  return jsonResponse({ data: order })
}
