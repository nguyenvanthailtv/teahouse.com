export interface Product {
    id: number
    name: string
    slug: string
    price: number
    price_promotional: number
    featuredImage: string
    gallery: [string]
    description: string
    category_id: number
}

export interface Category {
    id: number
    name: string
    slug: string
    featuredImage: string
}

export interface Cart {
    product: Product
    quantity: number
    total: number
}
