import axios from "axios";

export type Reflection = {
  reflectionCUID: string;
  title: string;
  content: string;
  createdAt: string;
};

export type Reflections = {
  reflectionCUID: string;
  title: string;
  createdAt: string;
};

export type ReflectionGetResponse = {
  reflections: Reflections[];
};

export const reflectionAPI = {
  async getReflections() {
    const response = await axios.request<ReflectionGetResponse>({
      url: `/api/reflection`,
      method: "GET",
    });
    return response.data.reflections;
  },

  async getReflectionsByUsername(username: string) {
    const response = await axios.request<ReflectionGetResponse>({
      url: `/api/reflection/${username}`,
      method: "GET",
    });
    return response.data.reflections;
  },

  async createReflection({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) {
    const response = await axios.request<Reflection>({
      url: `/api/reflection`,
      method: "POST",
      data: {
        title,
        content,
      },
    });
    return response.data;
  },
};
