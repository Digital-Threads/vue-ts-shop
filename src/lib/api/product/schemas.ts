export interface ProductSchema {
    id: number
    categoryIds: Array<number>
    productName: string
    thumbnailUrl: string
    defaultDisplayedPriceFormatted: string
    description: string
    price: number
}

export interface ProductsSchema {
    count: number
    items: ProductSchema[]
    limit: number
    offset: number
    total: number
}