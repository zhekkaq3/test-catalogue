import { ProductCard } from "@/components/ui/product-card/product-card"
import { getProduct } from "@/lib/api"

export default async function Product({
    params,
  }: {
    params: Promise<{ id : string }>
  }) {
    const { id } = await params
    const product = await getProduct(id)
    
    return (
      <main className="container mx-auto mt-[70px]">
        <ProductCard product={product}/>  
      </main>
    )
  }