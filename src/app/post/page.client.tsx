"use client";
import { useCreateReflectionForm } from "@/src/hooks/reflection/useCreateReflectionForm";
import ReflectionPostForm from "@/src/components/form/ReflectionPostForm";

type ReflectionPostFormPageProps = {
  username: string;
};

const ReflectionPostFormPage: React.FC<ReflectionPostFormPageProps> = ({
  username,
}) => {
  const { control, isSubmitting, isSubmitSuccessful, errors, onSubmit } =
    useCreateReflectionForm(username);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(e);
  };

  return (
    <ReflectionPostForm
      control={control}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      errors={errors}
      onSubmit={handleSubmit}
    />
  );
};

export default ReflectionPostFormPage;
