import { Box, Button, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import MarkdownEditor from "../markdown-editor/MarkdownEditor";

type ReflectionPostFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: any;
};

const ReflectionPostForm: React.FC<ReflectionPostFormProps> = ({
  onSubmit,
  control,
  errors,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("😊");

  return (
    <form onSubmit={onSubmit}>
      <Box display={"flex"} flexDirection={"column"}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="title"
              label="Title"
              error={!!errors.title}
              helperText={errors.title ? errors.title.message : ""}
              sx={{ alignSelf: "center", mb: 2 }}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <MarkdownEditor value={field.value} onChange={field.onChange} />
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
                    locale={"ja"}
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
          sx={{
            bgcolor: "blue",
            color: "white",
            alignSelf: "center",
          }}
        >
          投稿
        </Button>
      </Box>
    </form>
  );
};

export default ReflectionPostForm;
