import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reflectionAPI } from "@/src/api/reflection-api";
import { reflectionsKeys } from "@/src/utils/query-key/reflections-keys";

export const useCreateReflection = (username: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, content }: { title: string; content: string }) =>
      reflectionAPI.createReflection({ title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: reflectionsKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: reflectionsKeys.countsByUser(username),
      });
      queryClient.invalidateQueries({
        queryKey: reflectionsKeys.byUser(username),
      });
    },
  });
};
