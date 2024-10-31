import axios from "axios";

export type ReflectionDetail = {
  reflectionCUID: string;
  title: string;
  content: string;
  charStamp: string;
  isPublic: boolean;
  createdAt: string;
  user?: User;
};

export type Reflection = Omit<ReflectionDetail, "content">;

export type Reflections = {
  userImage?: string;
  reflections: Reflection[];
};

type User = {
  username: string;
  image: string;
};

export const reflectionAPI = {
  async getReflections() {
    const response = await axios.request<Reflections>({
      url: `/api/reflection`,
      method: "GET",
    });
    return response.data;
  },

  async getReflectionsByUsername(username: string) {
    const response = await axios.request<Reflections>({
      url: `/api/reflection/${username}`,
      method: "GET",
    });
    return response.data;
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
