import { Box, CircularProgress } from "@mui/material";

const loading = () => {
  return (
    <Box position={"fixed"} top={"50%"} left={{ xs: "45%", md: "48.5%" }}>
      <CircularProgress size={45} sx={{ color: "#8FC9F9" }} />
    </Box>
  );
};

export default loading;
