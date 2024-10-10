import axios from "axios";

export type Username = {
  username: string;
};

const usernameAPI = {
  async updateUsername({ username }: { username: string }) {
    const response = await axios.request<Username>({
      url: `/api/username`,
      method: "PATCH",
      data: { username },
    });
    return response.data;
  },
};

export default usernameAPI;
