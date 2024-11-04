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

export const reflectionAPI = {
  async getReflections() {
    const response = await axios.request<Reflections>({
      url: `/api/reflection`,
      method: "GET",
    });
    return response.data.reflections;
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

  async getReflectionByCUID(
    reflectionCUID: string
  ): Promise<Result<ReflectionDetailV2, 404>> {
    const path = `/api/post/${reflectionCUID}`;
    const option: FetchURLOptions = { method: "GET" };
    return await fetchURL<ReflectionDetailV2, 404>(path, option);
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
  }) {
    const response = await axios.request<ReflectionDetail>({
      url: `/api/reflection`,
      method: "POST",
      data: {
        title,
        content,
        charStamp,
        isPublic,
      },
    });
    return response.data;
  },
};
