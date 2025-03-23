
export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }
  
  export interface FiltersState {
    search: string
    category: string
    sort: 'relevance' | 'price_asc' | 'price_desc'
    priceRange: [number, number]
  }