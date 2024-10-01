export type Reflection = {
  reflectionUUID: string;
  title: string;
  content: string;
  createdAt: string;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const reflectionAPI = {
  async getReflectionPosts(): Promise<Reflection[]> {
    const response = await fetch(`${baseURL}/api/reflection`, {
      method: "GET",
    });
    return response.json();
  },

  async postReflectionPosts({
    title,
    content,
  }: {
    title: string;
    content: string;
  }): Promise<Reflection> {
    const response = await fetch(`${baseURL}/api/reflection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    return response.json();
  },
};

export default reflectionAPI;
