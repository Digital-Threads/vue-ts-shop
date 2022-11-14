import {getAxiosInstance} from "../index";
import {ProductSchema, ProductsSchema} from "./schemas";


export const fetchProducts = async (): Promise<ProductsSchema> => {
    const {data} = await getAxiosInstance().get<ProductsSchema>("products?categories=home");
    return data
};

export const fetchProductById = async (productId: number): Promise<ProductSchema> => {
  const { data } = await getAxiosInstance().get<ProductSchema>(`products/${productId}`);
  return data
};
