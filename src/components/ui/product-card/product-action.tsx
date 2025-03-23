import { useCartStore } from "@/stores/cart-store";
import { Button } from "../button";
import { Input } from "../input";
import { Product } from "@/types/product";
import { toast } from "sonner";

export default function ProductAction ({ product }: { product: Product }) {
    
    const { items, addItem, removeItem, updateQuantity } = useCartStore()
    const cartItem = items.find(item => item.product.id === product.id)
    const quantity = cartItem?.quantity || 0
  
    const handleAddToCart = () => {
      addItem(product)
      toast.success("Товар добавлен в корзину", {
        description: product.title,
      })
    }
  
    const handleRemove = () => {
      removeItem(product.id)
      toast.warning("Товар удален из корзины", {
        description: product.title,
      })
    }
  
    const handleQuantityChange = (newQuantity: number) => {
      const qty = Math.max(0, newQuantity)
      if (qty === 0) {
        handleRemove()
      } else {
        updateQuantity(product.id, qty)
      }
    }
    return (
        <>
        {quantity > 0 ? (
          <div className="flex items-center gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 0}
            >
              -
            </Button>
            <Input
              className="w-12 text-center"
              value={quantity}
              onChange={(e) => 
                handleQuantityChange(Number(e.target.value))
              }
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleRemove}
              className="ml-auto"
            >
              Удалить
            </Button>
          </div>
        ) : (
          <Button 
            className="w-full" 
            onClick={handleAddToCart}
          >
            Добавить в корзину
          </Button>
        )}
      </>
    )
}