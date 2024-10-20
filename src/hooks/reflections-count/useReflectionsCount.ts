import { reflectionsCountAPI } from "@/src/api/reflections-count-api";
import { reflectionsKeys } from "@/src/utils/query-key/reflections-keys";
import { useQuery } from "@tanstack/react-query";

export const useReflectionsCount = (username: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: reflectionsKeys.countsByUser(username),
    queryFn: () => reflectionsCountAPI.getReflectionsCount(username),
  });

  return { data, isLoading, error };
};
