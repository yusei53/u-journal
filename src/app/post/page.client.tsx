"use client";
import { useCreateReflectionForm } from "@/src/hooks/reflection/useCreateReflectionForm";
import ReflectionPostForm from "@/src/components/form/ReflectionPostForm";
import { useRouter } from "next/navigation";

type ReflectionPostFormPageProps = {
  username: string | undefined;
};

const ReflectionPostFormPage: React.FC<ReflectionPostFormPageProps> = ({
  username,
}) => {
  const router = useRouter();
  const { control, isSubmitting, errors, onSubmit } =
    useCreateReflectionForm(username);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(e);
  };

  if (!username) {
    router.push("/setting/username");
  }

  return (
    <ReflectionPostForm
      control={control}
      isSubmitting={isSubmitting}
      errors={errors}
      onSubmit={handleSubmit}
    />
  );
};

export default ReflectionPostFormPage;
