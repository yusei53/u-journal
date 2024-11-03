import axios from "axios";

export type ReflectionPerDate = {
  date: string;
  countReflections: number;
};

export type ReflectionsCount = {
  totalReflections: string;
  reflectionsPerDate: ReflectionPerDate[];
};

const defaultURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const reflectionsCountAPI = {
  async getReflectionsCount(username: string) {
    const res = await fetch(`${defaultURL}/api/${username}/reflections-count`);
    const data = await res.json();
    return data;
  },
};
