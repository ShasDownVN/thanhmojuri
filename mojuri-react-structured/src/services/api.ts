export type ProductReview = {
  id: string
  author: string
  rating: number
  content: string
  createdAt: string
}

export type Product = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  salePrice?: number
  category: string
  stock: number
  status: 'in-stock' | 'out-of-stock'
  image: string
  gallery: string[]
  featured: boolean
  reviews: ProductReview[]
  createdAt: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  category: string
  excerpt: string
  content: string
  coverImage: string
  status: 'draft' | 'published'
  publishedAt: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'unread' | 'read'
  createdAt: string
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export type Order = {
  id: string
  customer: {
    name: string
    phone: string
    email: string
    address: string
  }
  items: Array<{
    productId: string
    name: string
    price: number
    quantity: number
  }>
  subtotal: number
  shippingFee: number
  total: number
  status: OrderStatus
  createdAt: string
}

export type OrderStats = {
  totalRevenue: number
  totalOrders: number
  pendingOrders: number
  todayRevenue: number
  monthRevenue: number
  revenueByDay: Record<string, number>
  revenueByMonth: Record<string, number>
}

export type AuthUser = {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

type ApiResponse<T> = {
  data: T
}

type PaginatedResponse<T> = ApiResponse<T> & {
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api'

async function request<T>(path: string, options: RequestInit = {}) {
  let response: Response

  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers ?? {}),
      },
    })
  } catch {
    throw new Error(`Không kết nối được Backend API (${API_URL}). Hãy chạy npm.cmd run dev:backend:mock rồi tải lại trang.`)
  }

  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(body.message ?? 'API request failed')
  }

  return body as T
}

function auth(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  }
}

export const api = {
  login: (email: string, password: string) =>
    request<{ token: string; user: AuthUser }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  register: (name: string, email: string, password: string) =>
    request<{ token: string; user: AuthUser }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),
  getCategories: () => request<ApiResponse<{ products: string[]; blogs: string[] }>>('/categories'),
  getProducts: (params: Record<string, string | number | boolean | undefined> = {}) => {
    const search = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== '') search.set(key, String(value))
    })
    return request<PaginatedResponse<Product[]>>(`/products?${search.toString()}`)
  },
  getProduct: (slug: string) => request<ApiResponse<Product> & { related: Product[] }>(`/products/${slug}`),
  getBlogs: () => request<ApiResponse<BlogPost[]>>('/blogs'),
  getBlog: (slug: string) => request<ApiResponse<BlogPost> & { recent: BlogPost[] }>(`/blogs/${slug}`),
  sendContact: (message: Pick<ContactMessage, 'name' | 'email' | 'subject' | 'message'>) =>
    request<ApiResponse<ContactMessage>>('/contact', {
      method: 'POST',
      body: JSON.stringify(message),
    }),
  createOrder: (order: Pick<Order, 'customer' | 'items'>) =>
    request<ApiResponse<Order>>('/orders', {
      method: 'POST',
      body: JSON.stringify(order),
    }),
  getOrder: (id: string) => request<ApiResponse<Order>>(`/orders/${id}`),
  getAdminProducts: (token: string) =>
    request<ApiResponse<Product[]>>('/admin/products', {
      headers: auth(token),
    }),
  createProduct: (
    token: string,
    product: Pick<Product, 'name' | 'description' | 'price' | 'salePrice' | 'category' | 'stock' | 'status' | 'image' | 'gallery' | 'featured'>,
  ) =>
    request<ApiResponse<Product>>('/admin/products', {
      method: 'POST',
      headers: auth(token),
      body: JSON.stringify(product),
    }),
  updateProduct: (token: string, productId: string, product: Partial<Product>) =>
    request<ApiResponse<Product>>(`/admin/products/${productId}`, {
      method: 'PUT',
      headers: auth(token),
      body: JSON.stringify(product),
    }),
  deleteProduct: (token: string, productId: string) =>
    request<ApiResponse<{ id: string }>>(`/admin/products/${productId}`, {
      method: 'DELETE',
      headers: auth(token),
    }),
  getAdminOrders: (token: string) =>
    request<ApiResponse<Order[]> & { stats: OrderStats }>('/admin/orders', {
      headers: auth(token),
    }),
  updateOrderStatus: (token: string, orderId: string, status: OrderStatus) =>
    request<ApiResponse<Order>>(`/admin/orders/${orderId}`, {
      method: 'PATCH',
      headers: auth(token),
      body: JSON.stringify({ status }),
    }),
  getAdminContacts: (token: string) =>
    request<ApiResponse<ContactMessage[]>>('/admin/contacts', {
      headers: auth(token),
    }),
  markContactRead: (token: string, contactId: string) =>
    request<ApiResponse<ContactMessage>>(`/admin/contacts/${contactId}`, {
      method: 'PATCH',
      headers: auth(token),
    }),
  getAdminBlogs: (token: string) =>
    request<ApiResponse<BlogPost[]>>('/admin/blogs', {
      headers: auth(token),
    }),
  createBlog: (
    token: string,
    blog: Pick<BlogPost, 'title' | 'category' | 'excerpt' | 'content' | 'coverImage' | 'status'>,
  ) =>
    request<ApiResponse<BlogPost>>('/admin/blogs', {
      method: 'POST',
      headers: auth(token),
      body: JSON.stringify(blog),
    }),
}
