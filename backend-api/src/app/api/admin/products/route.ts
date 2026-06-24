import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { requireAdmin } from '@/lib/admin'
import { productSchema, validationError } from '@/lib/validators'

export function OPTIONS() {
  return optionsResponse()
}

export function GET(request: NextRequest) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  return jsonResponse({
    data: db.products.findMany().data,
  })
}

export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  const body = productSchema.safeParse(await request.json())
  if (!body.success) {
    return jsonResponse({ message: validationError(body.error) }, { status: 400 })
  }

  const { name, description, price, salePrice, category, stock, status, image, gallery, featured } = body.data
  const product = db.products.create({
    name,
    description,
    price,
    salePrice,
    category,
    stock,
    status: status ?? (stock > 0 ? 'in-stock' : 'out-of-stock'),
    image,
    gallery,
    featured,
  })

  return jsonResponse({ data: product }, { status: 201 })
}
