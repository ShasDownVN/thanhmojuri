const http = require('http')
const crypto = require('crypto')

const PORT = 3000
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'

const users = [
  {
    id: 'u-001',
    email: 'admin@mojuri.local',
    password: hashPassword('admin123'),
    name: 'Mojuri Admin',
    role: 'admin',
  },
  {
    id: 'u-002',
    email: 'user@mojuri.local',
    password: hashPassword('user123'),
    name: 'Demo User',
    role: 'user',
  },
]

const products = [
  {
    id: 'p-001',
    name: 'Diamond Halo Ring',
    slug: 'diamond-halo-ring',
    description: '<p>A delicate halo ring with a polished gold band.</p>',
    price: 189,
    salePrice: 169,
    category: 'Rings',
    stock: 24,
    status: 'in-stock',
    image: '/media/product/1.jpg',
    gallery: ['/media/product/1.jpg', '/media/product/1-2.jpg'],
    featured: true,
    reviews: [],
    createdAt: new Date().toISOString(),
  },
]

const orders = [
  {
    id: 'ORD-1001',
    customer: {
      name: 'Mai Nguyen',
      phone: '0901234567',
      email: 'mai@example.com',
      address: '12 Nguyen Hue, District 1, HCMC',
    },
    items: [{ productId: 'p-001', name: 'Diamond Halo Ring', price: 169, quantity: 1 }],
    subtotal: 169,
    shippingFee: 15,
    total: 184,
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
]
const contacts = []
const blogs = []

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

function base64url(value) {
  return Buffer.from(value).toString('base64url')
}

function sign(value) {
  return crypto.createHmac('sha256', JWT_SECRET).update(value).digest('base64url')
}

function createToken(user) {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = base64url(JSON.stringify({ ...user, exp: Math.floor(Date.now() / 1000) + 86400 }))
  return `${header}.${payload}.${sign(`${header}.${payload}`)}`
}

function verifyToken(token) {
  const [header, payload, signature] = token.split('.')
  if (!header || !payload || !signature) return null
  if (sign(`${header}.${payload}`) !== signature) return null
  const user = JSON.parse(Buffer.from(payload, 'base64url').toString())
  if (user.exp < Math.floor(Date.now() / 1000)) return null
  return user
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  })
  res.end(JSON.stringify(data))
}

function readBody(req) {
  return new Promise((resolve) => {
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
    })
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {})
      } catch {
        resolve({})
      }
    })
  })
}

function getAdmin(req) {
  const authorization = req.headers.authorization || ''
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : ''
  const user = token ? verifyToken(token) : null
  return user?.role === 'admin' ? user : null
}

function getOrderStats() {
  const payableOrders = orders.filter((order) => order.status !== 'cancelled')
  const todayKey = new Date().toISOString().slice(0, 10)
  const monthKey = new Date().toISOString().slice(0, 7)
  const revenueByDay = payableOrders.reduce((acc, order) => {
    const key = order.createdAt.slice(0, 10)
    acc[key] = (acc[key] || 0) + order.total
    return acc
  }, {})
  const revenueByMonth = payableOrders.reduce((acc, order) => {
    const key = order.createdAt.slice(0, 7)
    acc[key] = (acc[key] || 0) + order.total
    return acc
  }, {})

  return {
    totalRevenue: payableOrders.reduce((sum, order) => sum + order.total, 0),
    totalOrders: orders.length,
    pendingOrders: orders.filter((order) => order.status === 'pending').length,
    todayRevenue: revenueByDay[todayKey] || 0,
    monthRevenue: revenueByMonth[monthKey] || 0,
    revenueByDay,
    revenueByMonth,
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`)
  const pathname = url.pathname

  if (req.method === 'OPTIONS') {
    return sendJson(res, 204, {})
  }

  if (req.method === 'GET' && pathname === '/api/health') {
    return sendJson(res, 200, { status: 'ok', service: 'mojuri-dev-api' })
  }

  if (req.method === 'POST' && pathname === '/api/auth/login') {
    const body = await readBody(req)
    const email = String(body.email || '').toLowerCase()
    const password = String(body.password || '')
    const user = users.find((item) => item.email === email)

    if (!user || user.password !== hashPassword(password)) {
      return sendJson(res, 401, { message: 'Invalid email or password.' })
    }

    const authUser = { id: user.id, email: user.email, name: user.name, role: user.role }
    return sendJson(res, 200, { token: createToken(authUser), user: authUser })
  }

  if (req.method === 'POST' && pathname === '/api/auth/register') {
    const body = await readBody(req)
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim().toLowerCase()
    const password = String(body.password || '')

    if (name.length < 2 || !email.includes('@') || password.length < 6) {
      return sendJson(res, 400, { message: 'Name, valid email, and password with at least 6 characters are required.' })
    }

    if (users.some((item) => item.email === email)) {
      return sendJson(res, 409, { message: 'Email already exists.' })
    }

    const user = {
      id: `u-${Date.now()}`,
      email,
      password: hashPassword(password),
      name,
      role: 'user',
    }
    users.push(user)

    const authUser = { id: user.id, email: user.email, name: user.name, role: user.role }
    return sendJson(res, 201, { token: createToken(authUser), user: authUser })
  }

  if (req.method === 'GET' && pathname === '/api/products') {
    return sendJson(res, 200, {
      data: products,
      meta: { page: 1, limit: products.length, total: products.length, totalPages: 1 },
    })
  }

  if (req.method === 'GET' && pathname === '/api/categories') {
    return sendJson(res, 200, {
      data: {
        products: ['Rings', 'Necklaces', 'Earrings', 'Bracelets'],
        blogs: ['Tips', 'Collections', 'News'],
      },
    })
  }

  if (req.method === 'POST' && pathname === '/api/orders') {
    const body = await readBody(req)
    const customer = body.customer || {}
    const items = Array.isArray(body.items) ? body.items : []

    if (!customer.name || !customer.phone || !customer.email || !customer.address || items.length === 0) {
      return sendJson(res, 400, { message: 'Customer information and cart items are required.' })
    }

    const normalizedItems = items.map((item) => ({
      productId: String(item.productId || ''),
      name: String(item.name || 'Product'),
      price: Number(item.price || 0),
      quantity: Math.max(1, Number(item.quantity || 1)),
    }))
    const subtotal = normalizedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shippingFee = subtotal >= 300 ? 0 : 15
    const order = {
      id: `ORD-${Date.now()}`,
      customer: {
        name: String(customer.name),
        phone: String(customer.phone),
        email: String(customer.email),
        address: String(customer.address),
      },
      items: normalizedItems,
      subtotal,
      shippingFee,
      total: subtotal + shippingFee,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    orders.unshift(order)
    return sendJson(res, 201, { data: order })
  }

  const publicOrderMatch = pathname.match(/^\/api\/orders\/(.+)$/)
  if (req.method === 'GET' && publicOrderMatch) {
    const order = orders.find((item) => item.id === publicOrderMatch[1])
    if (!order) return sendJson(res, 404, { message: 'Order not found.' })
    return sendJson(res, 200, { data: order })
  }

  if (pathname === '/api/admin/products') {
    if (!getAdmin(req)) return sendJson(res, 401, { message: 'Admin token required.' })

    if (req.method === 'GET') {
      return sendJson(res, 200, { data: products })
    }

    if (req.method === 'POST') {
      const body = await readBody(req)
      const product = {
        id: `p-${Date.now()}`,
        name: String(body.name || ''),
        slug: slugify(String(body.name || 'product')),
        description: String(body.description || ''),
        price: Number(body.price || 0),
        salePrice: body.salePrice ? Number(body.salePrice) : undefined,
        category: String(body.category || 'Rings'),
        stock: Number(body.stock || 0),
        status: body.status || (Number(body.stock || 0) > 0 ? 'in-stock' : 'out-of-stock'),
        image: String(body.image || '/media/product/1.jpg'),
        gallery: Array.isArray(body.gallery) ? body.gallery : ['/media/product/1.jpg'],
        featured: Boolean(body.featured),
        reviews: [],
        createdAt: new Date().toISOString(),
      }
      products.unshift(product)
      return sendJson(res, 201, { data: product })
    }
  }

  if (pathname === '/api/admin/orders') {
    if (!getAdmin(req)) return sendJson(res, 401, { message: 'Admin token required.' })

    if (req.method === 'GET') {
      return sendJson(res, 200, {
        data: orders,
        stats: getOrderStats(),
      })
    }
  }

  const orderMatch = pathname.match(/^\/api\/admin\/orders\/(.+)$/)
  if (orderMatch) {
    if (!getAdmin(req)) return sendJson(res, 401, { message: 'Admin token required.' })
    const order = orders.find((item) => item.id === orderMatch[1])
    if (!order) return sendJson(res, 404, { message: 'Order not found.' })

    if (req.method === 'PATCH') {
      const body = await readBody(req)
      const nextStatus = String(body.status || order.status)
      if (!['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(nextStatus)) {
        return sendJson(res, 400, { message: 'Invalid order status.' })
      }
      order.status = nextStatus
      return sendJson(res, 200, { data: order })
    }
  }

  if (pathname === '/api/admin/contacts') {
    if (!getAdmin(req)) return sendJson(res, 401, { message: 'Admin token required.' })

    if (req.method === 'GET') {
      return sendJson(res, 200, { data: contacts })
    }
  }

  const contactMatch = pathname.match(/^\/api\/admin\/contacts\/(.+)$/)
  if (contactMatch) {
    if (!getAdmin(req)) return sendJson(res, 401, { message: 'Admin token required.' })
    const contact = contacts.find((item) => item.id === contactMatch[1])
    if (!contact) return sendJson(res, 404, { message: 'Contact message not found.' })

    if (req.method === 'PATCH') {
      contact.status = 'read'
      return sendJson(res, 200, { data: contact })
    }
  }

  if (pathname === '/api/admin/blogs') {
    if (!getAdmin(req)) return sendJson(res, 401, { message: 'Admin token required.' })

    if (req.method === 'GET') {
      return sendJson(res, 200, { data: blogs })
    }

    if (req.method === 'POST') {
      const body = await readBody(req)
      const blog = {
        id: `b-${Date.now()}`,
        title: String(body.title || ''),
        slug: slugify(String(body.title || 'blog-post')),
        category: String(body.category || 'Tips'),
        excerpt: String(body.excerpt || ''),
        content: String(body.content || ''),
        coverImage: String(body.coverImage || '/media/blog/1.jpg'),
        status: String(body.status || 'published'),
        publishedAt: new Date().toISOString(),
      }
      blogs.unshift(blog)
      return sendJson(res, 201, { data: blog })
    }
  }

  const productMatch = pathname.match(/^\/api\/admin\/products\/(.+)$/)
  if (productMatch) {
    if (!getAdmin(req)) return sendJson(res, 401, { message: 'Admin token required.' })
    const id = productMatch[1]
    const index = products.findIndex((product) => product.id === id)
    if (index === -1) return sendJson(res, 404, { message: 'Product not found.' })

    if (req.method === 'GET') return sendJson(res, 200, { data: products[index] })

    if (req.method === 'PUT') {
      const body = await readBody(req)
      products[index] = {
        ...products[index],
        ...body,
        slug: body.name ? slugify(String(body.name)) : products[index].slug,
      }
      return sendJson(res, 200, { data: products[index] })
    }

    if (req.method === 'DELETE') {
      products.splice(index, 1)
      return sendJson(res, 200, { data: { id } })
    }
  }

  return sendJson(res, 404, { message: 'API route not found.' })
})

server.listen(PORT, () => {
  console.log(`Mojuri dev API running at http://localhost:${PORT}`)
})
