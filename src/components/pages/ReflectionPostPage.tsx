"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleLoginForm from "../auth/GoogleLoginForm";
import { useRouter } from "next/navigation";
import { User } from "next-auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import ReflectionPostForm from "../reflection/ReflectionPostForm";
import React from "react";
import { reflectionAPI } from "@/src/api/reflection-api";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "タイトルは2文字以上で入力してください。" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上で入力してください。" })
    .max(140, { message: "本文は140字以内で入力してください" }),
});

type ReflectionPostPageProps = {
  currentUser: User | null;
};

const ReflectionPostPage: React.FC<ReflectionPostPageProps> = ({
  currentUser,
}) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
    reflectionAPI
      .postReflection({ title: formData.title, content: formData.content })
      .then(() => {
        reset();
        alert("投稿が完了しました");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return currentUser ? (
    <>
      <ReflectionPostForm
        onSubmit={handleSubmit(onSubmit)}
        control={control}
        errors={errors}
      />
    </>
  ) : (
    <>
      <GoogleLoginForm />
    </>
  );
};

export default ReflectionPostPage;
