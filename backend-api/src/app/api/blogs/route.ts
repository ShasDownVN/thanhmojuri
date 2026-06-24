import { db } from '@/lib/db'
import { jsonResponse, optionsResponse } from '@/lib/cors'

export function OPTIONS() {
  return optionsResponse()
}

export function GET() {
  return jsonResponse({
    data: db.blogs.findMany(false),
  })
}
