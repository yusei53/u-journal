import { reflectionAPI } from "@/src/api/reflection-api";
import { reflectionsKeys } from "@/src/utils/query-key/reflections-keys";
import { useQuery } from "@tanstack/react-query";

export const useReflectionsByUsername = (username: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: reflectionsKeys.byUser(username),
    queryFn: () => reflectionAPI.getReflectionsByUsername(username),
  });

  return { data, isLoading, error };
};
