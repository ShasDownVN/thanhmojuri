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
  const blog = db.blogs.findBySlug(slug)

  if (!blog) {
    return jsonResponse({ message: 'Blog post not found.' }, { status: 404 })
  }

  return jsonResponse({
    data: blog,
    recent: db.blogs.findMany(false).filter((post) => post.id !== blog.id).slice(0, 4),
  })
}
