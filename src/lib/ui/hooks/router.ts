import { computed } from "@vue/reactivity";
import { isString } from "lodash";
import { useRoute, useRouter } from "vue-router";

export const useQueryString = (key: string, replace = true) => {
  const router = useRouter();
  const route = useRoute();

  return computed({
    get(): string {
      const val = route.query[key];

      return isString(val) ? val : "";
    },
    set(v: string) {
      if (v === route.query[key]) {
        return;
      }

      router[replace ? "replace" : "push"]({
        query: {
          ...route.query,
          [key]: v,
        },
      });
    },
  });
};
