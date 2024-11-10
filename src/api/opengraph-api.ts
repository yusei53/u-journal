import { Result } from "../utils/types/result";
import { fetchURL, FetchURLOptions } from "../utils/fetchURL";

export type ReflectionInformation = {
  title: string;
  user: {
    image: string;
    username: string;
  };
};

const opengraphAPI = {
  async getOGPByCUID(
    refectionCUID: string
  ): Promise<Result<ReflectionInformation, 404>> {
    const path = `/api/ogp/${refectionCUID}`;
    const options: FetchURLOptions = {
      method: "GET",
    };
    return await fetchURL<ReflectionInformation, 404>(path, options);
  },
};

export default opengraphAPI;
