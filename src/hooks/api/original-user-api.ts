export type User = {
  originalUserId: string;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const originalUserIdAPI = {
  async postOriginalUserId({
    originalUserId,
  }: {
    originalUserId: String;
  }): Promise<User> {
    const response = await fetch(`${baseURL}/api/originalUserId`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalUserId }),
    });
    return response.json();
  },
};

export default originalUserIdAPI;
