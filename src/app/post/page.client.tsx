"use client";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import { useRef, useState } from "react";
import { MarkdownEditorRef } from "@/src/components/reflection/form/markdown-editor";
import { useCreateReflectionForm } from "@/src/hooks/reflection/useCreateReflectionForm";
import ReflectionPostForm from "@/src/components/reflection/form/ReflectionPostForm";
import LoginForm from "@/src/components/auth/LoginForm";

const CreateReflectionPage = () => {
  const { data: session, status } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [isComposing, setIsComposing] = useState(false);
  const editorRef = useRef<MarkdownEditorRef>(null);
  const { control, errors, onSubmit } = useCreateReflectionForm(
    session?.user.username
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(e);
    setIsLoading(false);
  };

  const handleEnter = () => {
    if (editorRef.current && !isComposing) {
      editorRef.current.focus();
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  if (status === "loading") {
    return <Loading />;
  }

  {
    return session ? (
      <ReflectionPostForm
        control={control}
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onEnter={handleEnter}
        editorRef={editorRef}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
    ) : (
      <LoginForm />
    );
  }
};

export default CreateReflectionPage;
