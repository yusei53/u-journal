import { Typography, TextField, Button, Box, Modal } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type UsernameFormProps = {
  SubmitUsername: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: any;
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
};

const style = {
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
  handleOpen,
  handleClose,
  open,
}) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <>
      <Box bgcolor={"#13396E"} color={"white"}>
        <Button onClick={handleOpen}>Open modal</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ユーザーネームを設定してください
          </Typography>
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
              sx={{ bgcolor: "#13396E", color: "white", alignSelf: "center" }}
            >
              設定する
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default UsernameForm;
