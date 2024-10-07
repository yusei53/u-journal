"use client";

import { useSetUsername } from "@/src/hooks/username/useSetUsername";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {
  const [username, setUserName] = useState("");
  const setUsernameMutation = useSetUsername();

  const Submitusername = async (event: React.FormEvent) => {
    event.preventDefault();
    setUsernameMutation.mutate(
      {
        username: username,
      },
      {
        onSuccess: () => {
          alert("設定しました");
          setUserName("");
        },
      }
    );
  };

  return (
    <>
      <Typography>ユーザIDを設定してください</Typography>
      <form onSubmit={Submitusername}>
        <Box display={"flex"} flexDirection={"column"}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <Button
            type="submit"
            sx={{ bgcolor: "blue", color: "white", alignSelf: "center" }}
          >
            設定する
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Page;
