import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useCreateReflection } from "@/src/hooks/reflection/useCreateReflection";

export const createReflectionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "タイトルは1文字以上で入力してください。" }),
  content: z
    .string()
    .min(3, { message: "本文は3文字以上で入力してください。" }),
  charStamp: z.string(),
  isPublic: z.boolean(),
});

export type CreateReflectionSchemaType = z.infer<typeof createReflectionSchema>;

export const useCreateReflectionForm = (username: string | undefined) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<CreateReflectionSchemaType>({
    resolver: zodResolver(createReflectionSchema),
    defaultValues: { title: "", content: "", charStamp: "💭", isPublic: false },
  });

  const createReflectionMutation = useCreateReflection(username ?? ""); // usernameがundefinedの場合があるため

  const onSubmit = handleSubmit((formData: CreateReflectionSchemaType) => {
    createReflectionMutation.mutate(formData, {
      onSuccess: () => router.push(`/${username}`),
    });
  });

  return {
    control,
    isSubmitting,
    errors,
    onSubmit,
  };
};
