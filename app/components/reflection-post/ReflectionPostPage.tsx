import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import reflectionPostsAPI from "@/app/hooks/reflection-post-api";
import GoogleLoginForm from "../GoogleLoginForm";
import { useRouter } from "next/navigation";
import { User } from "next-auth";
import ReflectionPostForm from "./ReflectionPostForm";

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
    await reflectionPostsAPI.postReflectionPosts({
      title: formData.title,
      content: formData.content,
    });
  };

  return { currentUser } ? (
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
