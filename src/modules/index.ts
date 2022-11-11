import type {Module} from "../lib/modules";
import dashboard from "../modules/dashboard/module";
import product from "../modules/product/module";
import basket from "./basket/module";

const modules: Module[] = [dashboard, product, basket];

export default modules;
