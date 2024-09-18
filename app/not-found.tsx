import { Button, Typography, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      display={"flex"}
      textAlign={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      height={"100vh"}
    >
      <Typography fontWeight={"bold"} fontSize={35}>
        404 Not Found
      </Typography>
      <Typography mb={1}>お探しのページは見つかりませんでした</Typography>
      <Button
        sx={{
          backgroundColor: "#13396E",
          color: "white",
          alignSelf: "center",
        }}
        href="/"
      >
        ホームに戻る
      </Button>
    </Box>
  );
};

export default NotFound;
