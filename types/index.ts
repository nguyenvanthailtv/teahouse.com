export interface Product {
    id: number
    name: string
    slug: string
    price: number
    price_promotinal: number
    img: string
    category_id: number
}

export interface Category {
    id: number
    name: string
    slug: string
    img: string
}
