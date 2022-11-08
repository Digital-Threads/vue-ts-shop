import { useTimeoutFn } from "@vueuse/core";
import progress from "nprogress";

export const useProgress = () => {
  const start = useTimeoutFn(() => {
    progress.start();
  }, 0);

  const finish = () => {
    if (start.isPending) {
      start.stop();
    }

    progress.done();
  };

  return { start: () => start.start(), finish };
};
