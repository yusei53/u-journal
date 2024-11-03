import { Box, CircularProgress } from "@mui/material";

// MEMO: 高さを指定していないLoadingコンポーネント
export const Loader = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      my={10}
    >
      <CircularProgress size={45} sx={{ color: "#8FC9F9" }} />
    </Box>
  );
};
