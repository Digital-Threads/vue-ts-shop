import {
  hasErrorResponse,
  isAxiosError,
  NetworkError,
  TooManyAttemptsError,
  ValidationError,
} from "@/lib/api/errors";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { merge } from "lodash";

const getDefaultAxiosConfig = (): AxiosRequestConfig => {
  const token = import.meta.env.VITE_API_TOKEN

  return {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // headers: { Authorization: token ? `Bearer ${token.accessToken}` : false },
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const getAxiosInstance = (
  config: AxiosRequestConfig = {}
): AxiosInstance => {
  const instance = axios.create(merge(getDefaultAxiosConfig(), config));

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (!isAxiosError(err)) {
        throw err;
      }

      if (!hasErrorResponse(err)) {
        throw new NetworkError();
      }

      if (err.response.status === 429) {
        throw new TooManyAttemptsError();
      }

      if (err.response.status === 422) {
        throw new ValidationError(err);
      }

      throw err;
    }
  );

  return instance;
};
