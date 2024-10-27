import { Box, Container, Fade, Popper, Stack } from "@mui/material";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { CustomInput } from "../../shared/input";
import { Button } from "../../shared/button";
import { ErrorMessage } from "../../shared/alert";
import { MarkdownEditor, MarkdownEditorRef } from "./markdown-editor";
import { useState } from "react";
import EmojiPicker from "./EmojiPicker";
import Image from "next/image";

type FormValues = {
  title: string;
  content: string;
  charStamp: string;
  isPublic: boolean;
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box component={"form"} onSubmit={onSubmit}>
      <Box display={"flex"} position={"fixed"} top={25} right={35} gap={3}>
        <Controller
          name="isPublic"
          control={control}
          render={({ field }) => (
            <>
              <Button
                aria-describedby={id}
                onClick={handleClick}
                sx={{ border: "none", display: "flex", alignItems: "center" }}
                disableRipple
              >
                <Image
                  src="/lock.png"
                  alt="Lock Icon"
                  width={18}
                  height={18}
                  style={{ marginRight: 4 }}
                />
                {field.value ? "公開" : "非公開"}
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={250}>
                    <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                      <Button
                        onClick={() => {
                          field.onChange(true);
                          setAnchorEl(null);
                        }}
                        sx={{ border: "none", display: "block", width: "100%" }}
                        disableRipple
                      >
                        公開
                      </Button>
                      <Button
                        onClick={() => {
                          field.onChange(false);
                          setAnchorEl(null);
                        }}
                        sx={{ border: "none", display: "block", width: "100%" }}
                        disableRipple
                      >
                        非公開
                      </Button>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </>
          )}
        />
        <Button type={"submit"} disabled={isLoading}>
          {isLoading ? "投稿中..." : "投稿する"}
        </Button>
      </Box>
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
