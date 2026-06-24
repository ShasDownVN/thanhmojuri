import { FormEvent, useEffect, useState } from 'react'
import { api, Order } from '../services/api'
import { cartTotals, useCartStore } from '../stores/cartStore'

const emptyCustomer = {
  name: '',
  phone: '',
  email: '',
  address: '',
}

export default function Checkout() {
  const items = useCartStore((state) => state.items)
  const hydrate = useCartStore((state) => state.hydrate)
  const clearCart = useCartStore((state) => state.clearCart)
  const [customer, setCustomer] = useState(emptyCustomer)
  const [message, setMessage] = useState('')
  const [lookupId, setLookupId] = useState('')
  const [lookupOrder, setLookupOrder] = useState<Order | null>(null)
  const totals = cartTotals(items)

  useEffect(() => {
    hydrate()
  }, [])

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')

    try {
      const response = await api.createOrder({
        customer,
        items: items.map((item) => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      })
      clearCart()
      setLookupId(response.data.id)
      setLookupOrder(response.data)
      setMessage(`Order created: ${response.data.id}. Status: ${response.data.status}`)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Cannot create order')
    }
  }

  async function lookupStatus(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLookupOrder(null)
    setMessage('')
    try {
      const response = await api.getOrder(lookupId)
      setLookupOrder(response.data)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Cannot find order')
    }
  }

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <h1 className="text-title-heading">Checkout</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>Checkout
          </div>
        </div>
      </section>

      <section className="section-padding section-container p-l-r checkout-dynamic">
        <form className="checkout-form" onSubmit={submitOrder}>
          <h3>Billing Details</h3>
          <input required placeholder="Full name" value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} />
          <input required placeholder="Phone" value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} />
          <input required placeholder="Email" type="email" value={customer.email} onChange={(event) => setCustomer({ ...customer, email: event.target.value })} />
          <textarea required placeholder="Address" value={customer.address} onChange={(event) => setCustomer({ ...customer, address: event.target.value })} />
          <button className="button" disabled={items.length === 0} type="submit">
            Place order
          </button>
        </form>

        <aside className="checkout-review-order">
          <h3>Your order</h3>
          {items.map((item) => (
            <div className="cart-item" key={item.productId}>
              <span>{item.name} × {item.quantity}</span>
              <strong>${item.price * item.quantity}</strong>
            </div>
          ))}
          <div className="order-total">Subtotal: ${totals.subtotal}</div>
          <div className="order-total">Shipping: ${totals.shippingFee}</div>
          <div className="order-total">Total: ${totals.total}</div>
          {message && <p className="admin-message">{message}</p>}
        </aside>

        <form className="order-lookup" onSubmit={lookupStatus}>
          <h3>Track your order</h3>
          <input placeholder="Order ID" value={lookupId} onChange={(event) => setLookupId(event.target.value)} />
          <button type="submit">Check status</button>
          {lookupOrder && (
            <p>
              {lookupOrder.id}: <strong>{lookupOrder.status}</strong>
            </p>
          )}
        </form>
      </section>
    </main>
  )
}
