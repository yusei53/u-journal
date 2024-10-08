import axios from "axios";

export type Usename = {
  username: string;
};

const usernameAPI = {
  async updateUsername({ username }: { username: string }) {
    const response = await axios.request<Usename>({
      url: `/api/username`,
      method: "PATCH",
      data: { username },
    });
    return response.data;
  },
};
//test
export default usernameAPI;
