"use client";

import originalUserIdAPI from "@/src/hooks/api/original-user-api";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {
  const [userId, setUserId] = useState("");

  const SubmitOriginalUserId = async (event: React.FormEvent) => {
    event.preventDefault;
    originalUserIdAPI
      .postOriginalUserId({ originalUserId: userId })
      .then(() => {
        console.log("userId:", userId);
        setUserId("");
        alert("設定しました");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <Typography>ユーザIDを設定してください</Typography>
      <form onSubmit={SubmitOriginalUserId}>
        <Box display={"flex"} flexDirection={"column"}>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
