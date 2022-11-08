import type { PluginInstaller } from "@/lib/plugins";
import VueToast from "vue-toast-notification";

const install: PluginInstaller = (app) => {
  app.use(VueToast);
};

export default install;
