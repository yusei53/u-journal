"use client";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import { useState } from "react";
import { useCreateReflectionForm } from "@/src/hooks/reflection/useCreateReflectionForm";
import ReflectionPostForm from "@/src/components/form/ReflectionPostForm";
import LoginForm from "@/src/components/auth/LoginForm";

const CreateReflectionPage = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const { control, errors, onSubmit } = useCreateReflectionForm(
    session?.user.username
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(e);
    setIsLoading(false);
  };

  if (status === "loading") {
    return <Loading />;
  }

  return session ? (
    <ReflectionPostForm
      control={control}
      errors={errors}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  ) : (
    <LoginForm />
  );
};

export default CreateReflectionPage;
