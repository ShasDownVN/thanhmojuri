import { FormEvent, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { api, BlogPost, ContactMessage, Order, OrderStats, OrderStatus, Product } from '../../services/api'
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

  const stats = useMemo(
    () => ({
      totalProducts: products.length,
      totalStock: products.reduce((sum, product) => sum + product.stock, 0),
      unread: contacts.filter((contact) => contact.status === 'unread').length,
    }),
    [contacts, products],
  )

  async function loadAll(activeToken = token) {
    if (!activeToken) return
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
                        <button type="button" onClick={async () => { await api.deleteProduct(token, product.id); await loadAll() }}>Delete</button>
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
                      <select value={order.status} onChange={async (event) => { await api.updateOrderStatus(token, order.id, event.target.value as OrderStatus); await loadAll() }}>
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
                    <td><button type="button" onClick={async () => { await api.markContactRead(token, contact.id); await loadAll() }}>Mark read</button></td>
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
