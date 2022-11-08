import { AxiosError, type AxiosResponse } from "axios";
import { first } from "lodash";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isAxiosError = (err: any): err is AxiosError =>
  !!(err instanceof AxiosError && err.response);

export const hasErrorResponse = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any
): err is AxiosError & { response: AxiosResponse } =>
  !!(isAxiosError(err) && err.response);

export class NetworkError extends Error {
  //
}

export class TooManyAttemptsError extends Error {
  //
}

export class ForbiddenError extends Error {
  //
}

export class UnauthorizedError extends Error {
  //
}

export class BadRequestError extends Error {
  //
}

export class ValidationError extends Error {
  public constructor(
    private readonly err: AxiosError<{ errors: Record<string, string[]> }>
  ) {
    super(err.response?.statusText);
  }

  public hasError(key: string): boolean {
    if (!hasErrorResponse(this.err)) {
      return false;
    }

    const { data } = this.err.response;

    return data.errors && !!data.errors[key];
  }

  public getError(key: string): string | null {
    if (!hasErrorResponse(this.err)) {
      return null;
    }

    const { data } = this.err.response;

    if (!data.errors) {
      return null;
    }

    return first(data.errors[key]) ?? null;
  }

  public getErrors(): Record<string, string> {
    if (!hasErrorResponse(this.err)) {
      return {};
    }
    const { data } = this.err.response;

    if (!data.errors) {
      return {};
    }

    return data.errors;
  }
}
