import { Button, Typography, Box } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        mt={"20vh"}
      >
        <Typography fontWeight={"bold"} fontSize={35}>
          404 Not Found
        </Typography>
        <Typography mb={1}>お探しのページは見つかりませんでした</Typography>
      </Box>
      <Box
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        mt={1}
      >
        <Button sx={{ backgroundColor: "#13396E", color: "white" }} href="/">
          ホームに戻る
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
