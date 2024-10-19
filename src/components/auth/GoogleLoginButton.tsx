"use client";
import { Box } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { AuthButton } from "../shared/button";

const GoogleLoginButton = () => {
  return (
    <Box px={{ xs: 2, md: 5 }} mt={2}>
      <AuthButton
        label="Googleでログイン"
        icon={FcGoogle}
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
          })
        }
        sx={{
          width: "100%",
          color: "black",
          border: "1px solid #c4c4c4",
        }}
      />
    </Box>
  );
};

export default GoogleLoginButton;
