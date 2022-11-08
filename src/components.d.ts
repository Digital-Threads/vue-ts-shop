import { Form } from "vee-validate";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    VeeForm: typeof Form;
  }
}
