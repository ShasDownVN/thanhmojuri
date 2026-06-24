import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { jsonResponse, optionsResponse } from '@/lib/cors'

export function OPTIONS() {
  return optionsResponse()
}

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const page = Number(params.get('page') ?? 1)
  const limit = Number(params.get('limit') ?? 12)
  const featured = params.get('featured')

  return jsonResponse(
    db.products.findMany({
      page,
      limit,
      category: params.get('category') ?? undefined,
      search: params.get('search') ?? undefined,
      minPrice: params.get('minPrice') ? Number(params.get('minPrice')) : undefined,
      maxPrice: params.get('maxPrice') ? Number(params.get('maxPrice')) : undefined,
      featured: featured === null ? undefined : featured === 'true',
    }),
  )
}
