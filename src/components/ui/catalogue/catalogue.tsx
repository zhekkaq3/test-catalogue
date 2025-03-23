'use client'


import { Product } from "@/types/product";
import { ProductCard } from "../product-card/product-card";
import { useEffect, useMemo, useState } from 'react'
import { Filters } from "../filters/filters";
import { useDebounce } from "@/lib/hooks";

interface CatalogueProps {
    products?: Product[];
}

export default function Catalogue({ products = [] }: CatalogueProps) {
    const categories = Array.from(new Set(products.map(p => p.category)))
    const maxPrice = Math.max(...products.map(p => p.price))
    
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')
    const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice])
    const [sort, setSort] = useState('default')

    useEffect(() => {
        setPriceRange([0, maxPrice])
    }, [maxPrice])

    const debouncedSearch = useDebounce(search, 300)

    const filteredProducts = useMemo(() => {
        return filterProducts(products, debouncedSearch, category, priceRange, sort)
    }, [products, debouncedSearch, category, priceRange, sort])

    return (
        <>
            <Filters
                categories={categories}
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sort={sort}
                setSort={setSort}
                maxPrice={maxPrice}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {filteredProducts?.length ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        No products found
                    </div>
                )}
            </div>
        </>
    )
}


export const filterProducts = (
    products: Product[],
    search: string,
    category: string,
    priceRange: [number, number],
    sort: string
) => {
    const filtered = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === 'all' || product.category === category
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
        return matchesSearch && matchesCategory && matchesPrice
    })

    switch (sort) {
        case 'price_asc':
            return filtered.sort((a, b) => a.price - b.price)
        case 'price_desc':
            return filtered.sort((a, b) => b.price - a.price)
        default:
            return filtered
    }
}