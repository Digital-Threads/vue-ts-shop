import { getAxiosInstance } from "../index";
import type { ProductSchema } from "./schemas";

// export const fetchProducts = async (): Promise<ProductSchema> => {
export const fetchProducts = async () => {
  const { data } = await getAxiosInstance().get("products");
  console.log('DATA:::::', data)
  return data.items;
};
