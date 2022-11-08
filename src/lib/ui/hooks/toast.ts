import { useToast as factory } from "vue-toast-notification";

export const useToast = () => factory({ position: "top" });
