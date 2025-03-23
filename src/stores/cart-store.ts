import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Product = {
  id: number
  title: string
  price: number
  image: string
}

type CartItem = {
  product: Product
  quantity: number
}

type CartStore = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, newQuantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            item => item.product.id === product.id
          )

          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            }
          }

          return {
            items: [...state.items, { product, quantity: 1 }]
          }
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(item => item.product.id !== id)
        })),

      updateQuantity: (id, newQuantity) =>
        set((state) => ({
          items: state.items
            .map(item =>
              item.product.id === id
                ? { ...item, quantity: Math.max(0, newQuantity) }
                : item
            )
            .filter(item => item.quantity > 0)
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)