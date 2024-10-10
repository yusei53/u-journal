import { Typography, TextField, Button } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type UsernameFormProps = {
  SubmitUsername: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: any;
};

const UsernameForm: React.FC<UsernameFormProps> = ({
  SubmitUsername,
  control,
  errors,
}) => {
  return (
    <>
      <Typography>ユーザIDを設定してください</Typography>
      <form onSubmit={SubmitUsername}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="username"
              label="username"
              error={!!errors.username}
              helperText={
                typeof errors.username?.message === "string"
                  ? errors.username.message
                  : ""
              }
              sx={{ alignSelf: "center", mb: 2 }}
            />
          )}
        />
        <Button
          type="submit"
          sx={{ bgcolor: "blue", color: "white", alignSelf: "center" }}
        >
          設定する
        </Button>
      </form>
    </>
  );
};

export default UsernameForm;
