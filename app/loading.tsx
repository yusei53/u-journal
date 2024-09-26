import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={700}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default Loading;
