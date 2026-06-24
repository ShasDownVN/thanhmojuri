import { NextRequest } from 'next/server'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'
import { orderSchema, validationError } from '@/lib/validators'

export function OPTIONS() {
  return optionsResponse()
}

export async function POST(request: NextRequest) {
  const body = orderSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  const { customer, items } = body.data
  const subtotal = items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
  const shippingFee = subtotal >= 300 ? 0 : 15

  const order = db.orders.create({
    customer,
    items: items.map((item) => ({
      productId: String(item.productId),
      name: String(item.name),
      price: Number(item.price),
      quantity: Number(item.quantity),
    })),
    subtotal,
    shippingFee,
    total: subtotal + shippingFee,
  })

  return jsonResponse({ data: order }, { status: 201 })
}
