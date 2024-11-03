import axios from "axios";
import { fetchURL, FetchURLOptions } from "../utils/fetchURL";

export type ReflectionDetail = {
  reflectionCUID: string;
  title: string;
  content: string;
  charStamp: string;
  isPublic: boolean;
  createdAt: string;
};

export type Reflection = Omit<ReflectionDetail, "content">;

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

  async getReflectionsByUsername(username: string): Promise<Reflections> {
    const path = `/api/reflection/${username}`;
    const options: FetchURLOptions = { method: "GET" };
    return await fetchURL<Reflections>(path, options);
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
