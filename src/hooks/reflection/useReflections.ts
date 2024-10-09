import { reflectionAPI } from "@/src/api/reflection-api";
import { reflectionsKeys } from "@/src/utils/query-key/reflections-keys";
import { useQuery } from "@tanstack/react-query";

export const useReflections = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: reflectionsKeys.lists(),
    queryFn: reflectionAPI.getReflections,
  });

  return { data, isLoading, error };
};
