import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { reflectionAPI } from "@/src/api/reflection-api";
import { useState } from "react";

export const createReflectionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "タイトルは1文字以上で入力してください。" })
    .max(40, { message: "タイトルは40文字以内で入力してください。" }),
  content: z
    .string()
    .min(1, { message: "本文は1文字以上で入力してください。" }),
  charStamp: z.string(),
  isPublic: z.boolean(),
});

export type CreateReflectionSchemaType = z.infer<typeof createReflectionSchema>;

export const useCreateReflectionForm = (username: string | undefined) => {
  const router = useRouter();
  const [selectedEmoji, setSelectedEmoji] = useState("💭");

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<CreateReflectionSchemaType>({
    resolver: zodResolver(createReflectionSchema),
    defaultValues: {
      title: "",
      content: "",
      charStamp: selectedEmoji,
      isPublic: true,
    },
  });

  const handleEmojiChange = (emoji: string) => {
    setSelectedEmoji(emoji);
    setValue("charStamp", emoji);
  };

  const onSubmit = handleSubmit(
    async (formData: CreateReflectionSchemaType) => {
      const res = await reflectionAPI.createReflection(formData);

      if (res === 401) {
        router.push(`/login`);
      } else {
        router.push(`/${username}?status=posted`);
      }
    }
  );

  return {
    control,
    isSubmitting,
    isSubmitSuccessful,
    errors,
    onSubmit,
    selectedEmoji,
    handleEmojiChange,
  };
};
