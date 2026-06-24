import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'
import type { OrderStatus } from '@/types'
import { orderStatusSchema, validationError } from '@/lib/validators'

type RouteContext = {
  params: Promise<{
    id: string
  }>
}

const statuses: OrderStatus[] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled']

export function OPTIONS() {
  return optionsResponse()
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  const { id } = await context.params
  const body = orderStatusSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  const status = body.data.status as OrderStatus
  const order = db.orders.updateStatus(id, status)
  if (!order) {
    return jsonResponse({ message: 'Order not found.' }, { status: 404 })
  }

  return jsonResponse({ data: order })
}
