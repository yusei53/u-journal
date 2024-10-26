import { Box, Container, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { useRef, useState } from "react";
import { CustomInput } from "../shared/input";
import { MarkdownEditor, MarkdownEditorRef } from "../markdown-editor";
import Emoji from "./EmojiPicker";
import { Button } from "../shared/button";
import { ErrorMessage } from "../shared/alert";

const ReflectionPostForm = ({ onSubmit, control, errors }: any) => {
  const [selectedEmoji, setSelectedEmoji] = useState("💭");
  const [isComposing, setIsComposing] = useState(false);
  const editorRef = useRef<MarkdownEditorRef>(null);

  const handleEnterPress = () => {
    if (editorRef.current && !isComposing) {
      editorRef.current.focus();
    }
  };

  return (
    <Box component={"form"} onSubmit={onSubmit}>
      <Button
        type="submit"
        sx={{
          position: "fixed",
          top: 25,
          right: 25,
        }}
      >
        投稿する
      </Button>
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Stack gap={10} m={{ md: 10 }}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              // MEMO: エラーメッセージにStackが適用しないようにBoxでラップしてる
              <Box>
                <CustomInput
                  id="title"
                  placeholder="タイトル"
                  value={field.value}
                  onChange={field.onChange}
                  onEnter={handleEnterPress}
                  onCompositionStart={() => setIsComposing(true)}
                  onCompositionEnd={() => setIsComposing(false)}
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
                <Emoji
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
