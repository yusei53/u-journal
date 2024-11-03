import { fetchURL, FetchURLOptions } from "../utils/fetchURL";

export type ReflectionPerDate = {
  date: string;
  countReflections: number;
};

export type ReflectionsCount = {
  totalReflections: string;
  reflectionsPerDate: ReflectionPerDate[];
};

export const reflectionsCountAPI = {
  async getReflectionsCount(username: string) {
    const path = `/api/${username}/reflections-count`;
    const options: FetchURLOptions = { method: "GET" };
    return await fetchURL<ReflectionsCount>(path, options);
  },
};
