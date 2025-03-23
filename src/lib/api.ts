import { Product } from "@/types/product"

export const getAllProducts = async (): Promise<Product[]> => {
  // await new Promise(resolve => setTimeout(resolve, 1000)) 

  try {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}


export const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!res.ok) throw new Error('Failed to fetch product')
    return await res.json()
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}

