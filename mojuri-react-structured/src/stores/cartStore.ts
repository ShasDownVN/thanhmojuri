import { create } from 'zustand'
import type { Product } from '../services/api'

export type CartItem = {
  productId: string
  slug: string
  name: string
  image: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  hydrate: () => void
  addItem: (product: Product, quantity?: number) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

const storageKey = 'mojuri_cart'

function readStorage(): CartItem[] {
  const value = localStorage.getItem(storageKey)
  return value ? JSON.parse(value) : []
}

function writeStorage(items: CartItem[]) {
  localStorage.setItem(storageKey, JSON.stringify(items))
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  hydrate: () => set({ items: readStorage() }),
  addItem: (product, quantity = 1) => {
    const items = [...get().items]
    const existing = items.find((item) => item.productId === product.id)
    const price = product.salePrice ?? product.price

    if (existing) {
      existing.quantity += quantity
    } else {
      items.push({
        productId: product.id,
        slug: product.slug,
        name: product.name,
        image: product.image,
        price,
        quantity,
      })
    }

    writeStorage(items)
    set({ items })
  },
  updateQuantity: (productId, quantity) => {
    const items = get().items.map((item) =>
      item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item,
    )
    writeStorage(items)
    set({ items })
  },
  removeItem: (productId) => {
    const items = get().items.filter((item) => item.productId !== productId)
    writeStorage(items)
    set({ items })
  },
  clearCart: () => {
    writeStorage([])
    set({ items: [] })
  },
}))

export function cartTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingFee = subtotal === 0 || subtotal >= 300 ? 0 : 15
  return {
    subtotal,
    shippingFee,
    total: subtotal + shippingFee,
  }
}
