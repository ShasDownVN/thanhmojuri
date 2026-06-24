import type { Product } from '../services/api'

type ProductCardProps = {
  product: Product
  view?: 'grid' | 'list'
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, view = 'grid', onAddToCart }: ProductCardProps) {
  return (
    <article className="products-entry clearfix product-wapper dynamic-card">
      <div className="products-thumb">
        <a href={`/product/${product.slug}`}>
          <img alt={product.name} className="post-image" src={product.image} />
        </a>
      </div>
      <div className="products-content">
        <div className={view === 'grid' ? 'contents text-center' : 'contents'}>
          <div className="rating">
            <div className="star star-5"></div>
            <span className="count">({product.reviews.length} review)</span>
          </div>
          <h3 className="product-title">
            <a href={`/product/${product.slug}`}>{product.name}</a>
          </h3>
          <div className="dynamic-meta">{product.category}</div>
          <span className="price">
            {product.salePrice && <del>${product.price}</del>} <ins>${product.salePrice ?? product.price}</ins>
          </span>
          <button type="button" onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
