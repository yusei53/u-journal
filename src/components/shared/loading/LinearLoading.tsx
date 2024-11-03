import { Box, LinearProgress } from "@mui/material";

// MEMO: 一旦使ってない
export const LinearLoading = () => {
  return (
    <Box my={5} width={"100%"}>
      <LinearProgress color="success" />
    </Box>
  );
};
