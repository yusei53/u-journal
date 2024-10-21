import { Typography, TextField, Button, Box, Modal } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type UsernameFormProps = {
  SubmitUsername: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: any;
  handleToggle: (boolean: boolean) => void;
  modalOpen: boolean;
};

const modal = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: { xs: 400, md: 500 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  mt: { xs: 50, md: 30 },
};

const UsernameForm: React.FC<UsernameFormProps> = ({
  SubmitUsername,
  control,
  errors,
  handleToggle,
  modalOpen,
}) => {
  return (
    <>
      <Box bgcolor={"#13396E"} color={"white"}>
        <Button onClick={() => handleToggle(true)}>Open modal</Button>
      </Box>
      <Modal open={modalOpen} onClose={() => handleToggle(false)}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box sx={modal}>
            <Typography fontSize={17} m={2}>
              ユーザーネームを設定してください
            </Typography>
            <Box component={"form"} onSubmit={SubmitUsername}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
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
                      sx={{ mb: 2 }}
                    />
                  )}
                />
                <Button
                  type="submit"
                  sx={{ bgcolor: "#13396E", color: "white" }}
                >
                  設定する
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default UsernameForm;
