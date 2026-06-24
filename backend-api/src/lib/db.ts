import bcrypt from 'bcryptjs'
import type { BlogPost, ContactMessage, Order, OrderStats, OrderStatus, Product, User } from '@/types'

export const productCategories = ['Rings', 'Necklaces', 'Earrings', 'Bracelets']
export const blogCategories = ['Tips', 'Collections', 'News']

const reviewSeed = [
  {
    id: 'r-001',
    author: 'Peter Capidal',
    rating: 5,
    content: 'Beautiful finish and comfortable for everyday wear.',
    createdAt: '2026-06-12T08:00:00.000Z',
  },
]

const products: Product[] = [
  {
    id: 'p-001',
    name: 'Diamond Halo Ring',
    slug: 'diamond-halo-ring',
    description:
      '<p>A delicate halo ring with a polished gold band, made for special occasions and daily sparkle.</p>',
    price: 189,
    salePrice: 169,
    category: 'Rings',
    stock: 24,
    status: 'in-stock',
    image: '/media/product/1.jpg',
    gallery: ['/media/product/1.jpg', '/media/product/1-2.jpg', '/media/product/2.jpg'],
    featured: true,
    reviews: reviewSeed,
    createdAt: '2026-06-18T08:00:00.000Z',
  },
  {
    id: 'p-002',
    name: 'Pearl Drop Earrings',
    slug: 'pearl-drop-earrings',
    description: '<p>Freshwater pearl earrings with a slim gold hook and soft movement.</p>',
    price: 129,
    category: 'Earrings',
    stock: 18,
    status: 'in-stock',
    image: '/media/product/5.jpg',
    gallery: ['/media/product/5.jpg', '/media/product/5-2.jpg', '/media/product/6.jpg'],
    featured: true,
    reviews: [],
    createdAt: '2026-06-16T08:00:00.000Z',
  },
  {
    id: 'p-003',
    name: 'Gold Layered Necklace',
    slug: 'gold-layered-necklace',
    description: '<p>A layered necklace set designed to sit neatly with both shirts and dresses.</p>',
    price: 249,
    salePrice: 219,
    category: 'Necklaces',
    stock: 12,
    status: 'in-stock',
    image: '/media/product/3.jpg',
    gallery: ['/media/product/3.jpg', '/media/product/3-2.jpg', '/media/product/4.jpg'],
    featured: false,
    reviews: reviewSeed,
    createdAt: '2026-06-14T08:00:00.000Z',
  },
  {
    id: 'p-004',
    name: 'Minimal Chain Bracelet',
    slug: 'minimal-chain-bracelet',
    description: '<p>A slim bracelet with adjustable links and a clean modern profile.</p>',
    price: 99,
    category: 'Bracelets',
    stock: 0,
    status: 'out-of-stock',
    image: '/media/product/7.jpg',
    gallery: ['/media/product/7.jpg', '/media/product/7-2.jpg', '/media/product/8.jpg'],
    featured: true,
    reviews: [],
    createdAt: '2026-06-11T08:00:00.000Z',
  },
  {
    id: 'p-005',
    name: 'Turquoise Silver Hoops',
    slug: 'turquoise-silver-hoops',
    description: '<p>Silver hoops with turquoise accents for a bright statement look.</p>',
    price: 150,
    salePrice: 100,
    category: 'Earrings',
    stock: 9,
    status: 'in-stock',
    image: '/media/product/2.jpg',
    gallery: ['/media/product/2.jpg', '/media/product/2-2.jpg'],
    featured: false,
    reviews: reviewSeed,
    createdAt: '2026-06-09T08:00:00.000Z',
  },
]

const blogs: BlogPost[] = [
  {
    id: 'b-001',
    title: 'How to Choose Everyday Jewelry',
    slug: 'choose-everyday-jewelry',
    category: 'Tips',
    excerpt: 'Simple rules for pairing rings, earrings, and necklaces with daily outfits.',
    content:
      '<p>Start with one hero piece, then keep the rest quiet. Gold chains, pearl studs, and thin rings work well because they can move between work and evening outfits.</p><p>Store soft stones separately and clean pieces with a dry cloth after wearing.</p>',
    coverImage: '/media/blog/1.jpg',
    status: 'published',
    publishedAt: '2026-06-10T08:00:00.000Z',
  },
  {
    id: 'b-002',
    title: 'Caring for Gold and Pearl Pieces',
    slug: 'caring-for-gold-and-pearl',
    category: 'Tips',
    excerpt: 'Storage and cleaning tips that keep delicate jewelry bright for longer.',
    content:
      '<p>Pearls prefer soft pouches and low friction. Keep perfumes, lotions, and cleaning chemicals away from pearl and gold surfaces.</p>',
    coverImage: '/media/blog/2.jpg',
    status: 'published',
    publishedAt: '2026-06-14T08:00:00.000Z',
  },
  {
    id: 'b-003',
    title: 'Summer Collection Preview',
    slug: 'summer-collection-preview',
    category: 'Collections',
    excerpt: 'A first look at lighter bracelets and layered necklaces for warm weather.',
    content: '<p>This season focuses on airy silhouettes, soft pearls, and adjustable bracelet stacks.</p>',
    coverImage: '/media/blog/3.jpg',
    status: 'draft',
    publishedAt: '2026-06-20T08:00:00.000Z',
  },
]

const users: User[] = [
  {
    id: 'u-001',
    email: 'admin@mojuri.local',
    password: bcrypt.hashSync('admin123', 10),
    name: 'Mojuri Admin',
    role: 'admin',
  },
  {
    id: 'u-002',
    email: 'user@mojuri.local',
    password: bcrypt.hashSync('user123', 10),
    name: 'Demo User',
    role: 'user',
  },
]

const contacts: ContactMessage[] = [
  {
    id: 'c-001',
    name: 'Linh Tran',
    email: 'linh@example.com',
    subject: 'Ring size support',
    message: 'Can you help me choose the correct ring size?',
    status: 'unread',
    createdAt: '2026-06-21T08:00:00.000Z',
  },
]

const orders: Order[] = [
  {
    id: 'ORD-1001',
    customer: {
      name: 'Mai Nguyen',
      phone: '0901234567',
      email: 'mai@example.com',
      address: '12 Nguyen Hue, District 1, HCMC',
    },
    items: [
      {
        productId: 'p-001',
        name: 'Diamond Halo Ring',
        price: 169,
        quantity: 1,
      },
      {
        productId: 'p-002',
        name: 'Pearl Drop Earrings',
        price: 129,
        quantity: 2,
      },
    ],
    subtotal: 427,
    shippingFee: 15,
    total: 442,
    status: 'pending',
    createdAt: '2026-06-22T08:00:00.000Z',
  },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const db = {
  categories: {
    products: () => productCategories,
    blogs: () => blogCategories,
  },
  products: {
    findMany: (filters?: {
      category?: string
      search?: string
      minPrice?: number
      maxPrice?: number
      featured?: boolean
      limit?: number
      page?: number
    }) => {
      let result = [...products]
      if (filters?.category) result = result.filter((product) => product.category === filters.category)
      if (filters?.search) {
        const query = filters.search.toLowerCase()
        result = result.filter((product) => product.name.toLowerCase().includes(query))
      }
      if (filters?.minPrice !== undefined) result = result.filter((product) => product.price >= filters.minPrice!)
      if (filters?.maxPrice !== undefined) result = result.filter((product) => product.price <= filters.maxPrice!)
      if (filters?.featured !== undefined) result = result.filter((product) => product.featured === filters.featured)

      result.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))

      const page = filters?.page ?? 1
      const limit = filters?.limit ?? result.length
      const total = result.length
      const data = result.slice((page - 1) * limit, page * limit)

      return {
        data,
        meta: {
          page,
          limit,
          total,
          totalPages: Math.max(1, Math.ceil(total / limit)),
        },
      }
    },
    findById: (id: string) => products.find((product) => product.id === id) ?? null,
    findBySlug: (slug: string) => products.find((product) => product.slug === slug) ?? null,
    create: (input: Omit<Product, 'id' | 'slug' | 'createdAt' | 'reviews'> & { slug?: string }) => {
      const product: Product = {
        ...input,
        id: `p-${Date.now()}`,
        slug: input.slug ?? slugify(input.name),
        reviews: [],
        createdAt: new Date().toISOString(),
      }
      products.unshift(product)
      return product
    },
    update: (id: string, input: Partial<Omit<Product, 'id' | 'createdAt' | 'reviews'>>) => {
      const index = products.findIndex((product) => product.id === id)
      if (index === -1) return null

      products[index] = {
        ...products[index],
        ...input,
        slug: input.name ? slugify(input.name) : products[index].slug,
      }
      return products[index]
    },
    delete: (id: string) => {
      const index = products.findIndex((product) => product.id === id)
      if (index === -1) return false

      products.splice(index, 1)
      return true
    },
  },
  blogs: {
    findMany: (includeDrafts = false) =>
      blogs
        .filter((blog) => includeDrafts || blog.status === 'published')
        .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)),
    findBySlug: (slug: string) => blogs.find((blog) => blog.slug === slug && blog.status === 'published') ?? null,
    create: (input: Omit<BlogPost, 'id' | 'slug' | 'publishedAt'> & { slug?: string }) => {
      const blog: BlogPost = {
        ...input,
        id: `b-${Date.now()}`,
        slug: input.slug ?? slugify(input.title),
        publishedAt: new Date().toISOString(),
      }
      blogs.unshift(blog)
      return blog
    },
  },
  contacts: {
    findMany: () => contacts,
    create: (input: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
      const message: ContactMessage = {
        ...input,
        id: `c-${Date.now()}`,
        status: 'unread',
        createdAt: new Date().toISOString(),
      }
      contacts.unshift(message)
      return message
    },
    markRead: (id: string) => {
      const message = contacts.find((contact) => contact.id === id)
      if (!message) return null
      message.status = 'read'
      return message
    },
  },
  orders: {
    findMany: () => orders.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)),
    findById: (id: string) => orders.find((order) => order.id === id) ?? null,
    create: (input: Omit<Order, 'id' | 'status' | 'createdAt'>) => {
      const order: Order = {
        ...input,
        id: `ORD-${Date.now()}`,
        status: 'pending',
        createdAt: new Date().toISOString(),
      }
      orders.unshift(order)
      return order
    },
    updateStatus: (id: string, status: OrderStatus) => {
      const order = orders.find((item) => item.id === id)
      if (!order) return null
      order.status = status
      return order
    },
    revenueStats: (): OrderStats => {
      const payableOrders = orders.filter((order) => order.status !== 'cancelled')
      const todayKey = new Date().toISOString().slice(0, 10)
      const monthKey = new Date().toISOString().slice(0, 7)
      const revenueByDay = payableOrders.reduce<Record<string, number>>((acc, order) => {
        const key = order.createdAt.slice(0, 10)
        acc[key] = (acc[key] ?? 0) + order.total
        return acc
      }, {})
      const revenueByMonth = payableOrders.reduce<Record<string, number>>((acc, order) => {
        const key = order.createdAt.slice(0, 7)
        acc[key] = (acc[key] ?? 0) + order.total
        return acc
      }, {})

      return {
        totalRevenue: payableOrders.reduce((sum, order) => sum + order.total, 0),
        totalOrders: orders.length,
        pendingOrders: orders.filter((order) => order.status === 'pending').length,
        todayRevenue: revenueByDay[todayKey] ?? 0,
        monthRevenue: revenueByMonth[monthKey] ?? 0,
        revenueByDay,
        revenueByMonth,
      }
    },
  },
  users: {
    findByEmail: (email: string) => users.find((user) => user.email === email) ?? null,
    create: (input: Pick<User, 'email' | 'name' | 'password'>) => {
      const user: User = {
        ...input,
        id: `u-${Date.now()}`,
        role: 'user',
      }
      users.push(user)
      return user
    },
  },
}
