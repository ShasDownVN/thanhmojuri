import { NextRequest, NextResponse } from 'next/server'

const allowedOrigin = process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173'

export function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  }
}

export function jsonResponse<T>(data: T, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      ...corsHeaders(),
      ...(init?.headers ?? {}),
    },
  })
}

export function optionsResponse() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  })
}

export function getBearerToken(request: NextRequest) {
  const header = request.headers.get('authorization')
  if (!header?.startsWith('Bearer ')) return null
  return header.slice('Bearer '.length)
}
