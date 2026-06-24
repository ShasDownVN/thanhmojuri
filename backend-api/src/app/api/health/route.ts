import { jsonResponse, optionsResponse } from '@/lib/cors'

export function OPTIONS() {
  return optionsResponse()
}

export function GET() {
  return jsonResponse({
    status: 'ok',
    service: 'mojuri-backend-api',
    port: 3000,
  })
}
