export interface CategorySchema {
    id: number;
    name: string
    thumbnailUrl: string
}

export interface CategoriesSchema {
    count: number
    items: CategorySchema[]
    limit: number
    offset: number
    total: number
}