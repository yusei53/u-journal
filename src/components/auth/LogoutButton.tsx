import { Box } from "@mui/material";
import { signOut } from "next-auth/react";
import { AuthButton } from "./AuthButton";

const LogoutButton = () => {
  return (
    <Box>
      <AuthButton
        label="ログアウト"
        onClick={() => signOut()}
        sx={{
          border: "1px solid #c4c4c4",
        }}
      />
    </Box>
  );
};

export default LogoutButton;
