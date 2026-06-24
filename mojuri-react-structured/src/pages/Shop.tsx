import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api, Product } from '../services/api'
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [page, setPage] = useState(1)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const addItem = useCartStore((state) => state.addItem)

  const { data: categoriesResponse } = useQuery({
    queryKey: ['categories'],
    queryFn: api.getCategories,
  })
  const { data: productsResponse } = useQuery({
    queryKey: ['products', { page, category, search, maxPrice }],
    queryFn: () => api.getProducts({ page, limit: 4, category, search, maxPrice }),
  })

  const products: Product[] = productsResponse?.data ?? []
  const totalPages = productsResponse?.meta.totalPages ?? 1
  const categories = categoriesResponse?.data.products ?? []

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <div className="content-title-heading">
            <h1 className="text-title-heading">Shop Jewelry</h1>
          </div>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>Shop
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container p-l-r shop-dynamic">
          <aside className="shop-filters">
            <input placeholder="Search jewelry" value={search} onChange={(event) => setSearch(event.target.value)} />
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">All categories</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <input
              min="0"
              placeholder="Max price"
              type="number"
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
            />
          </aside>

          <div className="shop-results">
            <div className="products-topbar clearfix">
              <div className="products-count">Showing {products.length} products</div>
              <div className="shop-view-toggle">
                <button className={view === 'grid' ? 'active' : ''} type="button" onClick={() => setView('grid')}>
                  Grid
                </button>
                <button className={view === 'list' ? 'active' : ''} type="button" onClick={() => setView('list')}>
                  List
                </button>
              </div>
            </div>

            <div className={`products-list ${view}`}>
              <div className="row">
                {products.map((product) => (
                  <div className={view === 'grid' ? 'col-xl-3 col-lg-4 col-md-6' : 'col-12'} key={product.id}>
                    <ProductCard product={product} view={view} onAddToCart={addItem} />
                  </div>
                ))}
              </div>
            </div>

            <nav className="pagination dynamic-pagination">
              <button disabled={page === 1} type="button" onClick={() => setPage((value) => value - 1)}>
                Previous
              </button>
              <span>
                {page} / {totalPages}
              </span>
              <button disabled={page === totalPages} type="button" onClick={() => setPage((value) => value + 1)}>
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </main>
  )
}
