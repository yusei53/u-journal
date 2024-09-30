export type ReflectionPosts = {
  id: string;
  userId: string;
  title: string;
  content: string;
};

export type PostReflectionPosts = {
  title: string;
  content: string;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const reflectionPostsAPI = {
  async getReflectionPosts(): Promise<ReflectionPosts[]> {
    const response = await fetch(`${baseURL}/api/post`, {
      method: "GET",
    });
    return response.json();
  },
  async postReflectionPosts(
    data: PostReflectionPosts
  ): Promise<PostReflectionPosts> {
    const response = await fetch(`${baseURL}/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default reflectionPostsAPI;
