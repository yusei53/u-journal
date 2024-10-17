"use client";

import { useUsername } from "@/src/hooks/username/useUsername";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import UsernameForm from "../username/UsernameForm";
import React from "react";

export const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "ユーザーネームは3文字以上で入力してください。" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "ユーザーネームは英数字のみで入力してください。",
    }),
});

const SetUserNamePage = () => {
  const setUsernameMutation = useUsername();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpenAndClose = (boolean: boolean) => setOpen(boolean);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const SubmitUsername = (formData: any) => {
    setUsernameMutation.mutate(
      {
        username: formData.username,
      },
      {
        onSuccess: () => {
          alert("設定しました");
          reset();
        },
      }
    );
  };

  return (
    <UsernameForm
      SubmitUsername={handleSubmit(SubmitUsername)}
      control={control}
      errors={errors}
      open={open}
      handleOpenAndClose={handleOpenAndClose}
    />
  );
};

export default SetUserNamePage;
