import type {Module} from "../lib/modules";
import product from "../modules/product/module";
import basket from "./basket/module";

const modules: Module[] = [product, basket];

export default modules;
