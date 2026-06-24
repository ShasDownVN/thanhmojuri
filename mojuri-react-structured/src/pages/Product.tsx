import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'
import { useCartStore } from '../stores/cartStore'

export default function Product() {
  const { slug = 'diamond-halo-ring' } = useParams()
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const { data: productResponse } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => api.getProduct(slug),
  })

  const product = productResponse?.data
  const related = productResponse?.related ?? []

  if (!product) return <main className="section-padding section-container">Loading product...</main>

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <h1 className="text-title-heading">{product.name}</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>
            <a href="/shop">Shop</a>
            <span className="delimiter"></span>
            {product.name}
          </div>
        </div>
      </section>

      <section className="section-padding section-container p-l-r">
        <div className="row product-dynamic">
          <div className="col-lg-7">
            <div className="dynamic-gallery">
              {product.gallery.map((image) => (
                <img alt={product.name} key={image} src={image} />
              ))}
            </div>
          </div>
          <div className="col-lg-5 product-info">
            <h1 className="title">{product.name}</h1>
            <span className="price">
              {product.salePrice && <del>${product.price}</del>} <ins>${product.salePrice ?? product.price}</ins>
            </span>
            <p className="dynamic-meta">
              {product.category} · {product.status === 'in-stock' ? 'In stock' : 'Out of stock'} · {product.stock} available
            </p>
            <div className="description" dangerouslySetInnerHTML={{ __html: product.description }} />
            <div className="buttons">
              <div className="quantity">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  -
                </button>
                <input readOnly value={quantity} />
                <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                  +
                </button>
              </div>
              <button disabled={product.status === 'out-of-stock'} type="button" onClick={() => addItem(product, quantity)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="product-tabs-wrap dynamic-section">
          <h2>Reviews</h2>
          {product.reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            product.reviews.map((review) => (
              <article className="review" key={review.id}>
                <strong>{review.author}</strong>
                <span> Rating {review.rating}/5</span>
                <p>{review.content}</p>
              </article>
            ))
          )}
        </div>

        <div className="dynamic-section">
          <h2>Related products</h2>
          <div className="row">
            {related.map((item) => (
              <div className="col-md-3" key={item.id}>
                <a className="related-card" href={`/product/${item.slug}`}>
                  <img alt={item.name} src={item.image} />
                  <span>{item.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
