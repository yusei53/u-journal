import axios from "axios";

export type User = {
  username: string;
};

const usernameAPI = {
  async postUsername({ username }: { username: string }) {
    const response = await axios.request<User>({
      url: `/api/username`,
      method: "POST",
      data: { username },
    });
    return response.data;
  },
};

export default usernameAPI;
