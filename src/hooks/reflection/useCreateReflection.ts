import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reflectionAPI } from "@/src/api/reflection-api";
import { reflectionsKeys } from "@/src/utils/query-key/reflections-keys";

export const useCreateReflection = (username: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      title,
      content,
      charStamp,
    }: {
      title: string;
      content: string;
      charStamp: string;
    }) => reflectionAPI.createReflection({ title, content, charStamp }),
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
