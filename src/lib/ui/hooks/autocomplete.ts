import { watch, type Ref } from "vue";

export const useAutocompleteFix = (
  ref: Ref<HTMLInputElement | undefined>,
  condition: Ref<boolean>
) => {
  const removeReadonlyAttributes = () => {
    ref.value?.removeAttribute("readonly");
  };

  const addReadonlyAttributes = () => {
    ref.value?.setAttribute("readonly", "");
    ref.value?.setAttribute("autocomplete", "off");
  };

  watch(
    [ref, condition],
    (val) => {
      if (!val[0]) {
        return;
      }

      val[0].removeEventListener("focus", removeReadonlyAttributes);
      val[0].removeEventListener("focusout", addReadonlyAttributes);

      if (val[1]) {
        removeReadonlyAttributes();
      } else {
        addReadonlyAttributes();
        val[0].addEventListener("focus", removeReadonlyAttributes);
        val[0].addEventListener("focusout", addReadonlyAttributes);
      }
    },
    { immediate: true }
  );
};
