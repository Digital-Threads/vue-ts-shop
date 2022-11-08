import { getAxiosInstance } from "../index";
import type { CategorySchema } from "./schemas";

// export const fetchCategories = async (): Promise<ProductSchema> => {
export const fetchCategories = async () => {
  const { data } = await getAxiosInstance().get("categories");
  console.log('DATA:::::', data)
  return data.items;
};
