import type { FetchURLOptions } from "../utils/fetchURL";
import type { Result } from "../utils/types/result";
import { fetchURL } from "../utils/fetchURL";

export type Username = {
  username: string;
};

const usernameAPI = {
  async updateUsername({
    username
  }: {
    username: string;
  }): Promise<Result<Username, 401>> {
    const path = `/api/username`;
    const options: FetchURLOptions = {
      method: "PATCH",
      body: {
        username
      },
      headers: {
        "Content-Type": "application/json"
      }
    };
    return await fetchURL<Username, 401>(path, options);
  }
};

export default usernameAPI;
