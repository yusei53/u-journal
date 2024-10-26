"use client";
import LoginForm from "../auth/LoginForm";
import { User } from "next-auth";
import ReflectionPostForm from "../reflection/ReflectionPostForm";
import { useCreateReflectionForm } from "@/src/hooks/reflection/useCreateReflectionForm";
import { useRef, useState } from "react";
import { MarkdownEditorRef } from "../markdown-editor";

type ReflectionPostPageProps = {
  currentUserId: User["id"] | null;
  username: string | undefined;
};

const ReflectionPostPage: React.FC<ReflectionPostPageProps> = ({
  currentUserId,
  username,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef<MarkdownEditorRef>(null);
  const { control, errors, onSubmit } = useCreateReflectionForm(username);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(e);
    setIsLoading(false);
  };

  const handleEnter = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  return currentUserId ? (
    <ReflectionPostForm
      control={control}
      errors={errors}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      onEnter={handleEnter}
      editorRef={editorRef}
    />
  ) : (
    <LoginForm />
  );
};

export default ReflectionPostPage;
