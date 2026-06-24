import { db } from '@/lib/db'
import { jsonResponse, optionsResponse } from '@/lib/cors'

export function OPTIONS() {
  return optionsResponse()
}

export function GET() {
  return jsonResponse({
    data: {
      products: db.categories.products(),
      blogs: db.categories.blogs(),
    },
  })
}
