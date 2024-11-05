"use client";
import { useCreateReflectionForm } from "@/src/hooks/reflection/useCreateReflectionForm";
import ReflectionPostForm from "@/src/components/form/ReflectionPostForm";
import LoginForm from "@/src/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const ReflectionPostFormPage = () => {
  const { data: session, status } = useSession();

  const { control, isSubmitting, errors, onSubmit } = useCreateReflectionForm(
    session?.user.username
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(e);
  };

  if (status === "loading") {
    return <Loading />;
  }

  return session?.user.username ? (
    <ReflectionPostForm
      control={control}
      isSubmitting={isSubmitting}
      errors={errors}
      onSubmit={handleSubmit}
    />
  ) : (
    <LoginForm />
  );
};

export default ReflectionPostFormPage;
