"use client";
import { theme } from "@/src/utils/theme";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

// TODO: 内製Buttonコンポーネントを使う
const LogoutButton = () => {
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
    window.location.reload();
  };

  return (
    <Button
      sx={{
        fontSize: 13,
        display: "block",
        color: `${theme.palette.grey[600]}`,
        border: "none",
        borderRadius: 0,
        p: 0,
        transform: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      disableRipple
      onClick={handleSignOut}
    >
      ログアウト
    </Button>
  );
};

export default LogoutButton;
