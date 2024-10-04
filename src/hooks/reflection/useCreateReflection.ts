import { reflectionAPI } from "@/src/api/reflection-api";
import { reflectionsKeys } from "@/src/utils/query-key/reflections-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateReflection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, content }: { title: string; content: string }) =>
      reflectionAPI.createReflection({ title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: reflectionsKeys.lists() });
    },
  });
};
