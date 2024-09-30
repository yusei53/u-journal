import { Box, Typography, Button, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import getCurrentUser from "@/app/actions/getCurrentUser";
import reflectionPostsAPI from "@/app/hooks/reflection-post-api";
import GoogleLoginForm from "../GoogleLoginForm";
import { useRouter } from "next/navigation";
import { User } from "next-auth";
import { PostReflectionPosts, ReflectionPosts } from "@/app/types/types";

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
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (formData: any) => {
    console.log(formData);
    // POSTリクエストなどをここで呼び出す
    await reflectionPostsAPI.postReflectionPosts({
      title: formData.title,
      content: formData.content,
    });
  };

  return { currentUser } ? (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} flexDirection={"column"}>
          {/* Title Field */}
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id={"title"}
                label="Title"
                error={!!errors.title}
                helperText={errors.title ? errors.title.message : ""}
                sx={{ alignSelf: "center", mb: 2 }}
              />
            )}
          />

          {/* Content Field */}
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="content"
                label="Content"
                multiline
                rows={4}
                error={!!errors.content}
                helperText={errors.content ? errors.content.message : ""}
                sx={{ alignSelf: "center", mb: 2 }}
              />
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            sx={{ bgcolor: "blue", color: "white", alignSelf: "center" }}
          >
            投稿
          </Button>
        </Box>
      </form>
    </>
  ) : (
    <>
      <GoogleLoginForm />
    </>
  );
};

export default ReflectionPostPage;
