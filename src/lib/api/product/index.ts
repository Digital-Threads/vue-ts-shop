import { getAxiosInstance } from "../index";

export interface ProductSchemaRequest{
  id: number;
  slug: string;
}

// export const fetchProducts = async (): Promise<ProductSchema> => {
export const fetchProducts = async () => {
  const { data } = await getAxiosInstance().get("products");
  console.log("DATA:::::", data);
  return data.items;
};

export const fetchProductById = async (req: ProductSchemaRequest) => {
  const { data } = await getAxiosInstance().get(`products/${req.id}`);
  return data.items;
};
