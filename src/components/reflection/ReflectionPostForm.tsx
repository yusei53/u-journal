import { Box, Button } from "@mui/material";
import { Controller } from "react-hook-form";
import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { CustomInput } from "../shared/input";
import { MarkdownEditor, MarkdownEditorRef } from "../markdown-editor";

const ReflectionPostForm = ({ onSubmit, control, errors }: any) => {
  const [showPicker, setShowPicker] = useState(false);
  const [isComposing, setIsComposing] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState("😊");

  const editorRef = useRef<MarkdownEditorRef>(null);

  const handleEnterPress = () => {
    if (editorRef.current && !isComposing) {
      editorRef.current.focus();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <CustomInput
              id="title"
              placeholder="タイトル"
              value={field.value}
              onChange={field.onChange}
              onEnter={handleEnterPress}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={() => setIsComposing(false)}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <MarkdownEditor
              value={field.value}
              ref={editorRef}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="charStamp"
          control={control}
          render={({ field }) => (
            <Box position="relative">
              <Button
                sx={{ fontSize: "24px" }}
                onClick={() => setShowPicker((prev) => !prev)}
              >
                {selectedEmoji}
              </Button>
              {showPicker && (
                <Box position="absolute" zIndex={10}>
                  <Picker
                    data={data}
                    onEmojiSelect={(emoji: any) => {
                      setSelectedEmoji(emoji.native);
                      field.onChange(emoji.native);
                      setShowPicker(false);
                    }}
                  />
                </Box>
              )}
            </Box>
          )}
        />
        <Button
          type="submit"
          sx={{ bgcolor: "blue", color: "white", alignSelf: "center" }}
        >
          投稿
        </Button>
      </Box>
    </form>
  );
};

export default ReflectionPostForm;
