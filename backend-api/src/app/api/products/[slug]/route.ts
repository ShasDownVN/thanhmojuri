import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { jsonResponse, optionsResponse } from '@/lib/cors'

type RouteContext = {
  params: Promise<{
    slug: string
  }>
}

export function OPTIONS() {
  return optionsResponse()
}

export async function GET(_request: NextRequest, context: RouteContext) {
  const { slug } = await context.params
  const product = db.products.findBySlug(slug)

  if (!product) {
    return jsonResponse({ message: 'Product not found.' }, { status: 404 })
  }

  const related = db.products
    .findMany({ category: product.category, limit: 4 })
    .data.filter((item) => item.id !== product.id)

  return jsonResponse({
    data: product,
    related,
  })
}
