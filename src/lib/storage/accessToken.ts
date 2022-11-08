import { get, set } from "@/lib/storage";

export interface AccessToken {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

const STORAGE_KEY = "ACCESS_TOKEN";

export const getAccessToken = (): AccessToken | null => get(STORAGE_KEY);

export const setAccessToken = (token: AccessToken | null): void =>
  set(STORAGE_KEY, token);
