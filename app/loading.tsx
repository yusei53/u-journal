import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <CircularProgress size={"100px"} />
    </Box>
  );
};

export default Loading;
