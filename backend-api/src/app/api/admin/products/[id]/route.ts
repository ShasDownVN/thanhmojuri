import { NextRequest } from 'next/server'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'
import { requireAdmin } from '@/lib/admin'
import { productUpdateSchema, validationError } from '@/lib/validators'

type RouteContext = {
  params: Promise<{
    id: string
  }>
}

export function OPTIONS() {
  return optionsResponse()
}

export async function GET(request: NextRequest, context: RouteContext) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  const { id } = await context.params
  const product = db.products.findById(id)

  if (!product) {
    return jsonResponse({ message: 'Product not found.' }, { status: 404 })
  }

  return jsonResponse({ data: product })
}

export async function PUT(request: NextRequest, context: RouteContext) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  const { id } = await context.params
  const body = productUpdateSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  const updateData = { ...body.data }
  if (!updateData.status && updateData.stock !== undefined) {
    updateData.status = updateData.stock > 0 ? 'in-stock' : 'out-of-stock'
  }
  const product = db.products.update(id, updateData)

  if (!product) {
    return jsonResponse({ message: 'Product not found.' }, { status: 404 })
  }

  return jsonResponse({ data: product })
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  const { id } = await context.params
  const deleted = db.products.delete(id)

  if (!deleted) {
    return jsonResponse({ message: 'Product not found.' }, { status: 404 })
  }

  return jsonResponse({ data: { id } })
}
