'use client'

import { useCartStore } from "@/stores/cart-store"
import { Button } from '@/components/ui/button'
import { CartItem } from '@/components/ui/cart/cart-item'

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()
  
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <div className="text-center py-8">Корзина пуста</div>
      ) : (
        <>
          {items.map((item) => (
             <CartItem
             key={item.product.id}
             item={item}
             updateQuantity={updateQuantity}
             removeItem={removeItem}
           />
          ))}

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Итого:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1" 
                onClick={clearCart}
              >
                Очистить корзину
              </Button>
              <Button className="flex-1">Оформить заказ</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}