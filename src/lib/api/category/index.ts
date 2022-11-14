import {getAxiosInstance} from "../index";
import type {CategoriesSchema, CategorySchema} from "./schemas";


export const fetchCategories = async () => {
  const { data } = await getAxiosInstance().get("categories");
  return data.items;
};

export const fetchCategoryById = async (categoryId: number): Promise<CategoriesSchema> => {
    const {data} = await getAxiosInstance().get<CategoriesSchema>(`categories/${categoryId}`);

    return data
}