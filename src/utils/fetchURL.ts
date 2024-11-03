type FetchMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type FetchURLOptions = {
  method: FetchMethod;
  body?: any;
  headers?: HeadersInit;
};

const defaultURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function fetchURL<T>(
  path: string,
  options: FetchURLOptions
): Promise<T> {
  try {
    const response = await fetch(`${defaultURL}${path}`, {
      ...options,
    });

    if (!response.ok) {
      let errorMessage = `HTTP エラー ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData?.message || errorMessage;
      } catch {
        throw new Error(errorMessage);
      }
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    throw error;
  }
}
