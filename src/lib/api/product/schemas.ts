export interface ProductSchema {
    id: number;
    categoryIds: Array<Number>
    productName: String
    thumbnailUrl: String
    defaultDisplayedPriceFormatted: Number
}

export interface ProductsSchema {
    count: number
    items: ProductSchema[]
    limit: number
    offset: number
    total: number
}