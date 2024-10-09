import axios from "axios";

export type ReflectionPerDate = {
  date: string;
  countReflections: number;
};

export type ReflectionsCount = {
  totalReflections: number;
  reflectionsPerDate: ReflectionPerDate[];
};

export const reflectionsCountAPI = {
  async getReflectionsCount(username: string) {
    const response = await axios.request<ReflectionsCount>({
      url: `/api/${username}/reflections-count`,
      method: "GET",
    });
    return response.data;
  },
};
