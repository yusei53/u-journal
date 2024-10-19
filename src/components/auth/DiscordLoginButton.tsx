import { Box } from "@mui/material";
import React from "react";
import { AuthButton } from "../shared/button";
import { FaDiscord } from "react-icons/fa";
import { signIn } from "next-auth/react";

const DiscordLoginButton = () => {
  return (
    <Box px={{ xs: 2, md: 5 }} mt={2}>
      <AuthButton
        label="Discordでログイン"
        icon={FaDiscord}
        onClick={() =>
          signIn("discord", {
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

export default DiscordLoginButton;
