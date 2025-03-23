import { Suspense } from 'react'
import { getAllProducts } from '@/lib/api'
import { SkeletonGrid } from '@/components/ui/skeleton-grid'
import Catalogue from '@/components/ui/catalogue/catalogue'


export default async function Home() {
  const allProducts = await getAllProducts()

  return (
    <main className="container mx-auto mt-[70px]">
      <Suspense fallback={<SkeletonGrid />}>
        <Catalogue products={allProducts}/>
      </Suspense>
    </main>
  )
}
