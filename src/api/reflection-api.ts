import axios from "axios";
import { fetchURL, FetchURLOptions } from "../utils/fetchURL";
import { ErrorCode, Result } from "../utils/types/result";

// TODO: 投稿した時のレスポンスの型なので、命名を変更する
// TODO: reflectionCUIDはReflectionで必要だけどReflectionDetailにはいらない
export type ReflectionDetail = {
  reflectionCUID: string;
  title: string;
  content: string;
  charStamp: string;
  isPublic: boolean;
  createdAt: string;
};

export type ReflectionAll = {
  reflectionCUID: string;
  title: string;
  content: string;
  charStamp: string;
  isPublic: boolean;
  createdAt: string;
  user: ReflectionUser;
};

export type ReflectionDetailV2 = {
  userImage: string;
  reflectionCUID: string;
  title: string;
  content: string;
  charStamp: string;
  isPublic: boolean;
  createdAt: string;
};

export type Reflection = Omit<ReflectionDetail, "content" | "userImage">;

export type Reflections = {
  userImage: string;
  reflections: Reflection[];
};

type ReflectionUser = {
  username: string;
  image: string;
};

type ReflectionAllList = {
  reflections: ReflectionAll[];
};

export const reflectionAPI = {
  async getReflections() {
    const response = await axios.request<ReflectionAllList>({
      url: `/api/reflection`,
      method: "GET",
    });
    return response.data;
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
  }): Promise<Result<ReflectionDetail, 401>> {
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
    return await fetchURL<ReflectionDetail, 401>(path, options);
  },
};
