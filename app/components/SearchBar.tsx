import { Box, Typography } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Box display={"flex"} alignItems={"center"} marginTop={3}>
      <Box
        width={30}
        height={30}
        bgcolor={"#d9d9d9"}
        alignSelf={"center"}
        borderRadius={30}
      />
      <Typography marginLeft={3} marginRight={{ xs: 20, md: 85 }}>
        名前
      </Typography>
      <Box alignSelf={"center"}>
        <img src="./SearchIcon.png" />
      </Box>
    </Box>
  );
};

export default SearchBar;
