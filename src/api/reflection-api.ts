import axios from "axios";

export type Reflection = {
  reflectionUUID: string;
  title: string;
  content: string;
  createdAt: string;
};

export type ReflectionGetResponse = {
  reflections: Reflection[];
};

export const reflectionAPI = {
  async getReflections() {
    const response = await axios.request<ReflectionGetResponse>({
      url: `/api/reflection`,
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
