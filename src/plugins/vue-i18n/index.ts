import type { PluginInstaller } from "@/lib/plugins";
import en from "@/plugins/vue-i18n/messages/en";
import { createI18n } from "vue-i18n";

const install: PluginInstaller = (app) => {
  app.use(
    createI18n({
      locale: "en",
      fallbackLocale: "en",
      messages: { en },
    })
  );
};

export default install;
