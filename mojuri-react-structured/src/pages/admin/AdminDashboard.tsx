import { FormEvent, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { api, BlogPost, ContactMessage, Order, OrderStats, OrderStatus, Product } from '../../services/api'
import { DEMO_ADMIN_TOKEN, demoAdminUser, isDemoAdminLogin, isDemoAdminToken } from '../../services/demoAuth'
import { useAuthStore } from '../../stores/authStore'

type Tab = 'products' | 'orders' | 'contacts' | 'blogs'

const productFormDefaults = {
  name: '',
  category: 'Rings',
  description: '',
  price: '',
  salePrice: '',
  stock: '',
  status: 'in-stock' as Product['status'],
  image: '/media/product/1.jpg',
  gallery: '/media/product/1.jpg,/media/product/1-2.jpg',
  featured: false,
}

const blogFormDefaults = {
  title: '',
  category: 'Tips',
  excerpt: '',
  content: '',
  coverImage: '/media/blog/1.jpg',
  status: 'published' as BlogPost['status'],
}

const orderStatsDefaults: OrderStats = {
  totalRevenue: 0,
  totalOrders: 0,
  pendingOrders: 0,
  todayRevenue: 0,
  monthRevenue: 0,
  revenueByDay: {},
  revenueByMonth: {},
}

const demoProducts: Product[] = [
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
    gallery: ['/media/product/1.jpg', '/media/product/1-2.jpg', '/media/product/2.jpg'],
    featured: true,
    reviews: [],
    createdAt: '2026-06-18T08:00:00.000Z',
  },
  {
    id: 'p-002',
    name: 'Pearl Drop Earrings',
    slug: 'pearl-drop-earrings',
    description: '<p>Freshwater pearl earrings with a slim gold hook.</p>',
    price: 129,
    category: 'Earrings',
    stock: 18,
    status: 'in-stock',
    image: '/media/product/5.jpg',
    gallery: ['/media/product/5.jpg', '/media/product/5-2.jpg'],
    featured: true,
    reviews: [],
    createdAt: '2026-06-16T08:00:00.000Z',
  },
]

const demoOrders: Order[] = [
  {
    id: 'ORD-1001',
    customer: {
      name: 'Mai Nguyen',
      phone: '0901234567',
      email: 'mai@example.com',
      address: '12 Nguyen Hue, District 1, HCMC',
    },
    items: [
      { productId: 'p-001', name: 'Diamond Halo Ring', price: 169, quantity: 1 },
      { productId: 'p-002', name: 'Pearl Drop Earrings', price: 129, quantity: 2 },
    ],
    subtotal: 427,
    shippingFee: 15,
    total: 442,
    status: 'pending',
    createdAt: '2026-06-22T08:00:00.000Z',
  },
]

const demoContacts: ContactMessage[] = [
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

const demoBlogs: BlogPost[] = [
  {
    id: 'b-001',
    title: 'How to Choose Everyday Jewelry',
    slug: 'choose-everyday-jewelry',
    category: 'Tips',
    excerpt: 'Simple rules for pairing rings, earrings, and necklaces with daily outfits.',
    content: '<p>Start with one hero piece, then keep the rest quiet.</p>',
    coverImage: '/media/blog/1.jpg',
    status: 'published',
    publishedAt: '2026-06-10T08:00:00.000Z',
  },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function readDemoList<T>(key: string, fallback: T[]) {
  const raw = localStorage.getItem(key)
  if (!raw) return fallback

  try {
    return JSON.parse(raw) as T[]
  } catch {
    localStorage.removeItem(key)
    return fallback
  }
}

function writeDemoList<T>(key: string, value: T[]) {
  localStorage.setItem(key, JSON.stringify(value))
}

export default function AdminDashboard() {
  const token = useAuthStore((state) => state.token)
  const user = useAuthStore((state) => state.user)
  const setSession = useAuthStore((state) => state.setSession)
  const logout = useAuthStore((state) => state.logout)
  const [tab, setTab] = useState<Tab>('products')
  const [products, setProducts] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [orderStats, setOrderStats] = useState<OrderStats>(orderStatsDefaults)
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>(['Rings', 'Necklaces', 'Earrings', 'Bracelets'])
  const [email, setEmail] = useState('admin@mojuri.local')
  const [password, setPassword] = useState('admin123')
  const [productForm, setProductForm] = useState(productFormDefaults)
  const [blogForm, setBlogForm] = useState(blogFormDefaults)
  const [editingProductId, setEditingProductId] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const demoMode = isDemoAdminToken(token)

  const stats = useMemo(
    () => ({
      totalProducts: products.length,
      totalStock: products.reduce((sum, product) => sum + product.stock, 0),
      unread: contacts.filter((contact) => contact.status === 'unread').length,
    }),
    [contacts, products],
  )

  function loadDemoData() {
    const nextProducts = readDemoList<Product>('mojuri_demo_products', demoProducts)
    const nextOrders = readDemoList<Order>('mojuri_demo_orders', demoOrders)
    const nextContacts = readDemoList<ContactMessage>('mojuri_demo_contacts', demoContacts)
    const nextBlogs = readDemoList<BlogPost>('mojuri_demo_blogs', demoBlogs)
    const totalRevenue = nextOrders.reduce((sum, order) => sum + order.total, 0)

    setCategories(['Rings', 'Necklaces', 'Earrings', 'Bracelets'])
    setProducts(nextProducts)
    setOrders(nextOrders)
    setOrderStats({
      ...orderStatsDefaults,
      totalRevenue,
      totalOrders: nextOrders.length,
      pendingOrders: nextOrders.filter((order) => order.status === 'pending').length,
      todayRevenue: totalRevenue,
      monthRevenue: totalRevenue,
    })
    setContacts(nextContacts)
    setBlogs(nextBlogs)
  }

  async function loadAll(activeToken = token) {
    if (!activeToken) return

    if (isDemoAdminToken(activeToken)) {
      loadDemoData()
      return
    }

    setLoading(true)
    setMessage('')
    try {
      const [categoryResponse, productResponse, orderResponse, contactResponse, blogResponse] = await Promise.all([
        api.getCategories(),
        api.getAdminProducts(activeToken),
        api.getAdminOrders(activeToken),
        api.getAdminContacts(activeToken),
        api.getAdminBlogs(activeToken),
      ])
      setCategories(categoryResponse.data.products)
      setProducts(productResponse.data)
      setOrders(orderResponse.data)
      setOrderStats(orderResponse.stats)
      setContacts(contactResponse.data)
      setBlogs(blogResponse.data)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Cannot load admin data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadAll()
  }, [])

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const response = await api.login(email, password)
      setSession(response.token, response.user)
      await loadAll(response.token)
    } catch (error) {
      if (isDemoAdminLogin(email, password)) {
        setSession(DEMO_ADMIN_TOKEN, demoAdminUser)
        loadDemoData()
        setMessage('Demo admin mode is active.')
        return
      }
      setMessage(error instanceof Error ? error.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  async function saveProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const payload = {
      name: productForm.name,
      category: productForm.category,
      description: productForm.description,
      price: Number(productForm.price),
      salePrice: productForm.salePrice ? Number(productForm.salePrice) : undefined,
      stock: Number(productForm.stock),
      status: productForm.status,
      image: productForm.image,
      gallery: productForm.gallery.split(',').map((item) => item.trim()).filter(Boolean),
      featured: productForm.featured,
    }
    try {
      if (demoMode) {
        const product: Product = {
          id: editingProductId || `p-${Date.now()}`,
          slug: slugify(payload.name),
          reviews: [],
          createdAt: new Date().toISOString(),
          ...payload,
        }
        const nextProducts = editingProductId
          ? products.map((item) => (item.id === editingProductId ? { ...item, ...product } : item))
          : [product, ...products]

        setProducts(nextProducts)
        writeDemoList('mojuri_demo_products', nextProducts)
        setProductForm(productFormDefaults)
        setEditingProductId('')
        setMessage('Demo product saved locally.')
        return
      }

      if (editingProductId) {
        await api.updateProduct(token, editingProductId, payload)
      } else {
        await api.createProduct(token, payload)
      }
      setProductForm(productFormDefaults)
      setEditingProductId('')
      await loadAll()
      setMessage('Product saved successfully.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Cannot save product')
    }
  }

  async function saveBlog(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      if (demoMode) {
        const blog: BlogPost = {
          id: `b-${Date.now()}`,
          slug: slugify(blogForm.title),
          publishedAt: new Date().toISOString(),
          ...blogForm,
        }
        const nextBlogs = [blog, ...blogs]
        setBlogs(nextBlogs)
        writeDemoList('mojuri_demo_blogs', nextBlogs)
        setBlogForm(blogFormDefaults)
        setMessage('Demo blog post created locally.')
        return
      }

      await api.createBlog(token, blogForm)
      setBlogForm(blogFormDefaults)
      await loadAll()
      setMessage('Blog post created successfully.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Cannot save blog')
    }
  }

  function editProduct(product: Product) {
    setEditingProductId(product.id)
    setProductForm({
      name: product.name,
      category: product.category,
      description: product.description,
      price: String(product.price),
      salePrice: String(product.salePrice ?? ''),
      stock: String(product.stock),
      status: product.status,
      image: product.image,
      gallery: product.gallery.join(','),
      featured: product.featured,
    })
    setTab('products')
  }

  async function deleteProduct(productId: string) {
    if (demoMode) {
      const nextProducts = products.filter((product) => product.id !== productId)
      setProducts(nextProducts)
      writeDemoList('mojuri_demo_products', nextProducts)
      setMessage('Demo product deleted locally.')
      return
    }

    await api.deleteProduct(token, productId)
    await loadAll()
  }

  async function updateOrderStatus(orderId: string, status: OrderStatus) {
    if (demoMode) {
      const nextOrders = orders.map((order) => (order.id === orderId ? { ...order, status } : order))
      setOrders(nextOrders)
      writeDemoList('mojuri_demo_orders', nextOrders)
      return
    }

    await api.updateOrderStatus(token, orderId, status)
    await loadAll()
  }

  async function markContactRead(contactId: string) {
    if (demoMode) {
      const nextContacts = contacts.map((contact) => (contact.id === contactId ? { ...contact, status: 'read' as const } : contact))
      setContacts(nextContacts)
      writeDemoList('mojuri_demo_contacts', nextContacts)
      return
    }

    await api.markContactRead(token, contactId)
    await loadAll()
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/">Mojuri</a>
        <nav className="admin-nav">
          {(['products', 'orders', 'contacts', 'blogs'] as Tab[]).map((item) => (
            <button className={tab === item ? 'active' : ''} key={item} type="button" onClick={() => setTab(item)}>
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <p className="admin-kicker">Admin Dashboard</p>
            <h1>{tab[0].toUpperCase() + tab.slice(1)}</h1>
          </div>
          {user && (
            <div className="admin-user">
              <span>{user.name}</span>
              <button type="button" onClick={logout}>Logout</button>
            </div>
          )}
        </header>

        {!token ? (
          <form className="admin-panel admin-login" onSubmit={handleLogin}>
            <h2>Sign in</h2>
            <label>Email<input value={email} onChange={(event) => setEmail(event.target.value)} /></label>
            <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
            <button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Login as admin'}</button>
            {message && <p className="admin-message">{message}</p>}
          </form>
        ) : (
          <>
            <div className="admin-stats">
              <article><span>Products</span><strong>{stats.totalProducts}</strong></article>
              <article><span>Stock</span><strong>{stats.totalStock}</strong></article>
              <article><span>Orders</span><strong>{orderStats.totalOrders}</strong></article>
              <article><span>Pending</span><strong>{orderStats.pendingOrders}</strong></article>
              <article><span>Today revenue</span><strong>${orderStats.todayRevenue}</strong></article>
              <article><span>Month revenue</span><strong>${orderStats.monthRevenue}</strong></article>
              <article><span>Total revenue</span><strong>${orderStats.totalRevenue}</strong></article>
              <article><span>Unread</span><strong>{stats.unread}</strong></article>
            </div>

            {message && <p className="admin-message">{message}</p>}

            {tab === 'products' && (
              <>
                <form className="admin-panel admin-form-grid" onSubmit={saveProduct}>
                  <h2>{editingProductId ? 'Edit product' : 'Create product'}</h2>
                  <input required placeholder="Name" value={productForm.name} onChange={(event) => setProductForm({ ...productForm, name: event.target.value })} />
                  <select value={productForm.category} onChange={(event) => setProductForm({ ...productForm, category: event.target.value })}>
                    {categories.map((item) => <option key={item}>{item}</option>)}
                  </select>
                  <input required min="1" placeholder="Price" type="number" value={productForm.price} onChange={(event) => setProductForm({ ...productForm, price: event.target.value })} />
                  <input min="0" placeholder="Sale price" type="number" value={productForm.salePrice} onChange={(event) => setProductForm({ ...productForm, salePrice: event.target.value })} />
                  <input required min="0" placeholder="Stock" type="number" value={productForm.stock} onChange={(event) => setProductForm({ ...productForm, stock: event.target.value })} />
                  <select value={productForm.status} onChange={(event) => setProductForm({ ...productForm, status: event.target.value as Product['status'] })}>
                    <option value="in-stock">In stock</option>
                    <option value="out-of-stock">Out of stock</option>
                  </select>
                  <input placeholder="Thumbnail URL" value={productForm.image} onChange={(event) => setProductForm({ ...productForm, image: event.target.value })} />
                  <input placeholder="Gallery URLs comma separated" value={productForm.gallery} onChange={(event) => setProductForm({ ...productForm, gallery: event.target.value })} />
                  <textarea placeholder="Rich text description" value={productForm.description} onChange={(event) => setProductForm({ ...productForm, description: event.target.value })} />
                  <label className="admin-checkbox"><input checked={productForm.featured} type="checkbox" onChange={(event) => setProductForm({ ...productForm, featured: event.target.checked })} /> Trending</label>
                  <button type="submit">Save product</button>
                </form>
                <AdminTable headers={['Name', 'Category', 'Price', 'Stock', 'Status', 'Actions']}>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td><td>{product.category}</td><td>${product.salePrice ?? product.price}</td><td>{product.stock}</td><td>{product.status}</td>
                      <td>
                        <button type="button" onClick={() => editProduct(product)}>Edit</button>
                        <button type="button" onClick={() => deleteProduct(product.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </AdminTable>
              </>
            )}

            {tab === 'orders' && (
              <AdminTable headers={['Order', 'Customer', 'Items', 'Total', 'Status', 'Created']}>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td><td>{order.customer.name}</td><td>{order.items.length}</td><td>${order.total}</td>
                    <td>
                      <select value={order.status} onChange={(event) => updateOrderStatus(order.id, event.target.value as OrderStatus)}>
                        {(['pending', 'processing', 'shipped', 'delivered', 'cancelled'] as OrderStatus[]).map((status) => <option key={status}>{status}</option>)}
                      </select>
                    </td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </AdminTable>
            )}

            {tab === 'contacts' && (
              <AdminTable headers={['Name', 'Email', 'Subject', 'Status', 'Message', 'Actions']}>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td><td>{contact.email}</td><td>{contact.subject}</td><td>{contact.status}</td><td>{contact.message}</td>
                    <td><button type="button" onClick={() => markContactRead(contact.id)}>Mark read</button></td>
                  </tr>
                ))}
              </AdminTable>
            )}

            {tab === 'blogs' && (
              <>
                <form className="admin-panel admin-form-grid" onSubmit={saveBlog}>
                  <h2>Create blog post</h2>
                  <input required placeholder="Title" value={blogForm.title} onChange={(event) => setBlogForm({ ...blogForm, title: event.target.value })} />
                  <select value={blogForm.category} onChange={(event) => setBlogForm({ ...blogForm, category: event.target.value })}>
                    {['Tips', 'Collections', 'News'].map((item) => <option key={item}>{item}</option>)}
                  </select>
                  <input placeholder="Cover image" value={blogForm.coverImage} onChange={(event) => setBlogForm({ ...blogForm, coverImage: event.target.value })} />
                  <select value={blogForm.status} onChange={(event) => setBlogForm({ ...blogForm, status: event.target.value as BlogPost['status'] })}>
                    <option value="published">published</option><option value="draft">draft</option>
                  </select>
                  <textarea required placeholder="Excerpt" value={blogForm.excerpt} onChange={(event) => setBlogForm({ ...blogForm, excerpt: event.target.value })} />
                  <textarea required placeholder="Rich text content" value={blogForm.content} onChange={(event) => setBlogForm({ ...blogForm, content: event.target.value })} />
                  <button type="submit">Publish post</button>
                </form>
                <AdminTable headers={['Title', 'Category', 'Status', 'Published']}>
                  {blogs.map((blog) => (
                    <tr key={blog.id}><td>{blog.title}</td><td>{blog.category}</td><td>{blog.status}</td><td>{new Date(blog.publishedAt).toLocaleDateString()}</td></tr>
                  ))}
                </AdminTable>
              </>
            )}
          </>
        )}
      </section>
    </main>
  )
}

function AdminTable({ headers, children }: { headers: string[]; children: ReactNode }) {
  return (
    <div className="admin-panel">
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  )
}
