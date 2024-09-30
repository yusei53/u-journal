import { Box, Button, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import Editor from "../markdown-editor/Editor";

type RefrectionPostFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: any;
};

const ReflectionPostForm: React.FC<RefrectionPostFormProps> = ({
  onSubmit,
  control,
  errors,
}) => {
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
            <Editor value={field.value} onChange={field.onChange} />
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
