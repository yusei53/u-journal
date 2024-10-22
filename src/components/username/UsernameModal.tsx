import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { Controller } from "react-hook-form";

type UsernameModalProps = {
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
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 500, xs: 360 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const UsernameModal: React.FC<UsernameModalProps> = ({
  SubmitUsername,
  control,
  errors,
  handleToggle,
  modalOpen,
}) => {
  return (
    <Modal open={modalOpen} onClose={() => handleToggle(false)}>
      <Box sx={modal}>
        <Typography fontSize={{ md: 17 }} m={2}>
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
  );
};

export default UsernameModal;
