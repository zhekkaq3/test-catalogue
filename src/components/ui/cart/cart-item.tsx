'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

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

type CartItemProps = {
  item: CartItem
  updateQuantity: (productId: number, quantity: number) => void
  removeItem: (productId: number) => void
}

export function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        <div className="relative w-24 h-24">
          <Image
            src={item.product.image}
            alt={item.product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2 line-clamp-2">{item.product.title}</h3>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              disabled={item.quantity <= 0}
            >
              -
            </Button>

            <Input
              className="w-12 text-center"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(
                  item.product.id,
                  Math.max(1, Number(e.target.value))
                )
              }
            />

            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="font-bold">
            ${(item.product.price * item.quantity).toFixed(2)}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeItem(item.product.id)}
            className="text-red-500 hover:text-red-700"
          >
            Удалить
          </Button>
        </div>
      </div>
    </Card>
  )
}