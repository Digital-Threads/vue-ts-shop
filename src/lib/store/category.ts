import {defineStore} from "pinia";
import {fetchCategories} from "../api/category";
import {CategorySchema} from "../api/category/schemas";

interface RootState {
    categoriesList: Array<CategorySchema>,
    categoriesMeta: {
        limit: number,
        offset: number,
        total: number,
        count: number
    }
}

export const useCategoryStore = defineStore("categoryStore", {
    state: () => ({
        categoriesList: [],
        categoriesMeta: {
            limit: 100,
            offset: 0,
            total: 9,
            count: 0
        }
    } as RootState),
    getters: {
        getCategoriesList: state => state.categoriesList
    },
    actions: {
        async fetchCategories(): Promise<void> {
            this.categoriesList = await fetchCategories()
        },

        async fetchCategoryById(categoryId: number): Promise<void> {

        }
    }
});
