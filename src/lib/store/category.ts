import {defineStore} from "pinia";
import {fetchCategories} from "../api/category";

export const useCategoryStore = defineStore("categoryStore", {
    state: () => ({
        selectedCategory: null,
        categoriesList: [],
        categoriesMeta: {
            limit: 100,
            offset: 0,
            total: 9,
            count: 0
        }
    }),
    getters: {
        getCategoriesList: state => state.categoriesList
    },
    actions: {
        async fetchCategories() {
            this.categoriesList = await fetchCategories()
        },
    }
});
