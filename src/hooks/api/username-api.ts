import axios from "axios";

export type User = {
  username: string;
};

const usernameAPI = {
  async updateUsername({ username }: { username: string }) {
    const response = await axios.request<User>({
      url: `/api/username`,
      method: "PATCH",
      data: { username },
    });
    return response.data;
  },
};

export default usernameAPI;
