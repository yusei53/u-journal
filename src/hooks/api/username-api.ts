export type User = {
  username: string;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const usernameAPI = {
  async postusername({ username }: { username: String }): Promise<User> {
    const response = await fetch(`${baseURL}/api/username`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    return response.json();
  },
};

export default usernameAPI;
