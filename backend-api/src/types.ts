export type Role = 'admin' | 'user'

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

export type ProductReview = {
  id: string
  author: string
  rating: number
  content: string
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

export type User = {
  id: string
  email: string
  password: string
  name: string
  role: Role
}

export type AuthUser = Omit<User, 'password'>
