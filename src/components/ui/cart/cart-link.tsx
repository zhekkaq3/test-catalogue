 "use client"

import { useCartStore } from "@/stores/cart-store"
import { Badge } from "../badge"

export default function CartLink () {
      const { items } = useCartStore()
      const totalCount = items.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
    
    return (
        <div className="flex">
           <span>Cart</span> 
           <Badge className="ml-2">{totalCount}</Badge>
        </div>
    )
}