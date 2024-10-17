import { Typography, TextField, Button, Box, Modal } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type UsernameFormProps = {
  SubmitUsername: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: any;
  handleOpenAndClose: (boolean: boolean) => void;
  modalOpen: boolean;
};

const modalStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const UsernameForm: React.FC<UsernameFormProps> = ({
  SubmitUsername,
  control,
  errors,
  handleOpenAndClose,
  modalOpen,
}) => {
  return (
    <>
      <Box bgcolor={"#13396E"} color={"white"}>
        <Button onClick={() => handleOpenAndClose(true)}>Open modal</Button>
      </Box>
      <Modal open={modalOpen} onClose={() => handleOpenAndClose(false)}>
        <Box sx={modalStyle}>
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
              <Button type="submit" sx={{ bgcolor: "#13396E", color: "white" }}>
                設定する
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default UsernameForm;
