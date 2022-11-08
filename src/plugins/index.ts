import type { PluginInstaller } from "@/lib/plugins";
import pinia from "@/plugins/pinia";
// import i18n from "@/plugins/vue-i18n";
// import toasts from "@/plugins/vue-toast-notification";

const plugins: PluginInstaller[] = [
  pinia,
  // i18n,
  // toasts,
];

export default plugins;
