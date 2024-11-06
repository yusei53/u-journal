import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { notFound, useRouter } from "next/navigation";
import { reflectionAPI } from "@/src/api/reflection-api";

const createReflectionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "タイトルは1文字以上で入力してください。" }),
  content: z
    .string()
    .min(3, { message: "本文は3文字以上で入力してください。" }),
  charStamp: z.string(),
  isPublic: z.boolean(),
});

type CreateReflectionSchemaType = z.infer<typeof createReflectionSchema>;

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

  const onSubmit = handleSubmit(
    async (formData: CreateReflectionSchemaType) => {
      const res = await reflectionAPI.createReflection(formData);

      if (res === 401) {
        return notFound();
      } else {
        router.push(`/${username}`);
      }
    }
  );

  return {
    control,
    isSubmitting,
    errors,
    onSubmit,
  };
};
