import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Controller, FieldErrors } from "react-hook-form";
import { CustomInput } from "../shared/input";
import { theme } from "@/src/utils/theme";
import { Button } from "../shared/button";
import { ErrorMessage } from "../shared/alert";

type FormValues = {
  username: string;
};

type SettingUsernameModalProps = {
  SubmitUsername: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: FieldErrors<FormValues>;
  open: boolean;
  onClose: () => void;
};

const modal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 360, md: 440 },
  bgcolor: "background.paper",
  boxShadow: 4,
  p: 4,
  borderRadius: 5,
};

const SettingUsernameModal: React.FC<SettingUsernameModalProps> = ({
  SubmitUsername,
  control,
  errors,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} disableEscapeKeyDown>
      <Box>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 30,
            right: 30,
          }}
        >
          <CloseIcon
            fontSize="large"
            sx={{
              color: "white",
            }}
          />
        </IconButton>
        <Box sx={modal}>
          <Image
            src={"/favicon.svg"}
            alt={"u-journalのロゴ"}
            width={80}
            height={80}
          />
          <Box mt={3}>
            <Typography>あなただけのURLを設定しましょう！</Typography>
            <Typography fontSize={12} color={theme.palette.grey[500]}>
              ※あとで変更可能です
            </Typography>
          </Box>
          <Box component={"form"} onSubmit={SubmitUsername}>
            <Box my={5}>
              <Box display={"flex"} whiteSpace={"nowrap"}>
                <Typography>u-journal.vercel.app/</Typography>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <CustomInput
                      id={"username"}
                      placeholder={"example"}
                      value={field.value}
                      onChange={field.onChange}
                      style={{
                        fontSize: "0.9rem",
                        borderBottom: `1.5px solid ${theme.palette.grey[400]}`,
                        marginTop: "0.5px", // MEMO: URLとinputの間の隙間を調整
                      }}
                    />
                  )}
                />
              </Box>
              {errors.username && (
                <ErrorMessage message={errors.username.message} />
              )}
            </Box>
            <Button type="submit" sx={{ display: "block", margin: "auto" }}>
              設定する
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SettingUsernameModal;
