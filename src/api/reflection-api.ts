import axios from "axios";

export type ReflectionDetail = {
  reflectionCUID: string;
  title: string;
  content: string;
  charStamp: string;
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
  }: {
    title: string;
    content: string;
    charStamp: string;
  }) {
    const response = await axios.request<ReflectionDetail>({
      url: `/api/reflection`,
      method: "POST",
      data: {
        title,
        content,
        charStamp,
      },
    });
    return response.data;
  },
};
