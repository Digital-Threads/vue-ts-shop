import {getAxiosInstance} from "../index";
import {ProductSchema, ProductsSchema} from "./schemas";


export const fetchProducts = async (): Promise<ProductsSchema> => {
    const {data} = await getAxiosInstance().get<ProductsSchema>("products");
    return data
};

// export const fetchProductById = async (req: ProductSchemaRequest) => {
//   const { data } = await getAxiosInstance().get(`products/${req.id}`);
//   return <ProductSchema[]>data;
// };
