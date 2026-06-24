import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { jsonResponse, optionsResponse } from '@/lib/cors'
import { db } from '@/lib/db'

export function OPTIONS() {
  return optionsResponse()
}

export function GET(request: NextRequest) {
  if (!requireAdmin(request)) {
    return jsonResponse({ message: 'Admin token required.' }, { status: 401 })
  }

  return jsonResponse({
    data: db.orders.findMany(),
    stats: db.orders.revenueStats(),
  })
}
