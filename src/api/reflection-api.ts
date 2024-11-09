import { fetchURL, FetchURLOptions } from "../utils/fetchURL";
import { Result } from "../utils/types/result";

export type Reflection = {
  reflectionCUID: string;
  title: string;
  charStamp: string;
  isPublic: boolean;
  createdAt: string;
};

export type ReflectionWithUser = Reflection & {
  user: {
    username: string;
    image: string;
  };
};

type ReflectionAll = {
  reflections: ReflectionWithUser[];
};

export type Reflections = {
  userImage: string;
  reflections: Reflection[];
};

export type ReflectionDetail = Reflection & {
  userImage: string;
  content: string;
};

export const reflectionAPI = {
  async getReflectionAll(): Promise<Result<ReflectionAll, 404>> {
    const path = `/api/reflection`;
    const options: FetchURLOptions = {
      method: "GET",
      next: { tags: ["reflections-all"] },
    };
    return await fetchURL<ReflectionAll, 404>(path, options);
  },

  async getReflectionsByUsername(
    username: string
  ): Promise<Result<Reflections, 404>> {
    const path = `/api/reflection/${username}`;
    const options: FetchURLOptions = {
      method: "GET",
      next: { tags: ["reflections-with-user"] },
    };
    return await fetchURL<Reflections, 404>(path, options);
  },

  async createReflection({
    title,
    content,
    charStamp,
    isPublic,
  }: {
    title: string;
    content: string;
    charStamp: string;
    isPublic: boolean;
  }): Promise<Result<void, 401>> {
    const path = `/api/reflection`;
    const options: FetchURLOptions = {
      method: "POST",
      body: {
        title,
        content,
        charStamp,
        isPublic,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await fetchURL<void, 401>(path, options);
  },
};
