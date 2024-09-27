import { Box, Typography } from "@mui/material";
import React from "react";

const UserNameBar = () => {
  return (
    <Box display={"flex"} alignItems={"center"} mt={3}>
      <Box
        width={30}
        height={30}
        bgcolor={"#d9d9d9"}
        alignSelf={"center"}
        borderRadius={30}
      />
      <Typography ml={3} mr={{ xs: 20, md: 90 }}>
        名前
      </Typography>
    </Box>
  );
};

export default UserNameBar;
