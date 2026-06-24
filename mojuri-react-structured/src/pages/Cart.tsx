import { useEffect } from 'react'
import { cartTotals, useCartStore } from '../stores/cartStore'

export default function Cart() {
  const items = useCartStore((state) => state.items)
  const hydrate = useCartStore((state) => state.hydrate)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const totals = cartTotals(items)

  useEffect(() => {
    hydrate()
  }, [])

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <h1 className="text-title-heading">Shopping Cart</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>Cart
          </div>
        </div>
      </section>

      <section className="section-padding section-container p-l-r">
        {items.length === 0 ? (
          <div className="shop-cart-empty">
            <p className="cart-empty">Your cart is currently empty.</p>
            <a className="button" href="/shop">
              Return to shop
            </a>
          </div>
        ) : (
          <div className="shop-cart">
            <div className="row">
              <div className="col-xl-8">
                <table className="cart-items table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr className="cart-item" key={item.productId}>
                        <td className="product-thumbnail">
                          <a href={`/product/${item.slug}`}>
                            <img alt={item.name} className="product-image" src={item.image} />
                          </a>
                          <div className="product-name">{item.name}</div>
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div className="quantity">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <input readOnly value={item.quantity} />
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                          <button type="button" onClick={() => removeItem(item.productId)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-xl-4">
                <div className="cart-totals">
                  <h2>Cart totals</h2>
                  <div className="cart-subtotal">
                    <div className="title">Subtotal</div>
                    <div>${totals.subtotal}</div>
                  </div>
                  <div className="shipping-totals">
                    <div className="title">Shipping</div>
                    <div>${totals.shippingFee}</div>
                  </div>
                  <div className="order-total">
                    <div className="title">Total</div>
                    <div>${totals.total}</div>
                  </div>
                  <div className="proceed-to-checkout">
                    <a className="checkout-button button" href="/checkout">
                      Proceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
