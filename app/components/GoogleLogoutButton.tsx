"use client";
import { Box } from "@mui/material";
import Button from "./Button";
import { signOut } from "next-auth/react";

const GoogleLogoutButton = () => {
  return (
    <Box>
      <Button
        label="ログアウト"
        onClick={() => signOut()}
        sx={{
          border: "1px solid #c4c4c4",
        }}
      />
    </Box>
  );
};

export default GoogleLogoutButton;
