import { isNull } from "lodash";

export const get = <T>(key: string): T | null => {
  const val = localStorage.getItem(key);

  if (!val) {
    return null;
  }

  return JSON.parse(val);
};

export const set = <T>(key: string, val: T | null): void => {
  if (isNull(val)) {
    localStorage.removeItem(key);
    return;
  }

  localStorage.setItem(key, JSON.stringify(val));
};
