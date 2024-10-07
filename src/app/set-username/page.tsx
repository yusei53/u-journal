"use client";

import usernameAPI from "@/src/hooks/api/username-api";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {
  const [username, setUserName] = useState("");

  const Submitusername = async (event: React.FormEvent) => {
    event.preventDefault();
    usernameAPI
      .postusername({ username: username })
      .then(() => {
        console.log("userId:", username);
        setUserName("");
        alert("設定しました");
      })
      .catch((error) => {
        console.log("error", error);
      });
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
