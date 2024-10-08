import { useMutation } from "@tanstack/react-query";
import usernameAPI from "../../api/username-api";

export const useUsername = () => {
  return useMutation({
    mutationFn: ({ username }: { username: string }) =>
      usernameAPI.updateUsername({ username }),
  });
};
