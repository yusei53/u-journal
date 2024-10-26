import { Box, Container, Stack } from "@mui/material";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { CustomInput } from "../../shared/input";
import { Button } from "../../shared/button";
import { ErrorMessage } from "../../shared/alert";
import { MarkdownEditor, MarkdownEditorRef } from "./markdown-editor";
import { useState } from "react";
import EmojiPicker from "./EmojiPicker";

type FormValues = {
  title: string;
  content: string;
  charStamp: string;
};

type ReflectionPostFormProps = {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  isLoading: boolean;
  onSubmit: (event: React.FormEvent) => Promise<void>;
  onEnter: () => void;
  editorRef: React.RefObject<MarkdownEditorRef>;
};

const ReflectionPostForm: React.FC<ReflectionPostFormProps> = ({
  control,
  errors,
  isLoading = false,
  onEnter,
  onSubmit,
  editorRef,
}: any) => {
  const [selectedEmoji, setSelectedEmoji] = useState("💭");

  return (
    <Box component={"form"} onSubmit={onSubmit}>
      <Button
        type={"submit"}
        disabled={isLoading}
        sx={{
          position: "fixed",
          top: 25,
          right: 25,
        }}
      >
        {isLoading ? "投稿中..." : "投稿する"}
      </Button>
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Stack gap={10} m={{ md: 10 }}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Box>
                <CustomInput
                  id="title"
                  placeholder="タイトル"
                  value={field.value}
                  onChange={field.onChange}
                  onEnter={onEnter}
                />
                {errors.title && (
                  <ErrorMessage message={errors.title.message} />
                )}
              </Box>
            )}
          />
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <Box>
                <MarkdownEditor
                  value={field.value}
                  ref={editorRef}
                  onChange={field.onChange}
                />
                {errors.content && (
                  <ErrorMessage message={errors.content.message} />
                )}
              </Box>
            )}
          />
          <Controller
            name="charStamp"
            control={control}
            render={({ field }) => (
              <Box>
                <EmojiPicker
                  selectedEmoji={selectedEmoji}
                  setSelectedEmoji={setSelectedEmoji}
                  onChange={field.onChange}
                />
                {errors.charStamp && (
                  <ErrorMessage message={errors.charStamp.message} />
                )}
              </Box>
            )}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default ReflectionPostForm;
