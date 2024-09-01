"use client";
import { Box } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  return (
    <Box px={{ xs: 2, md: 5 }}>
      <Button
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
