import { Box, Typography } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <Box marginRight={"48vw"} display={"flex"} alignItems={"center"}>
        <Box
          width={30}
          height={30}
          bgcolor={"#d9d9d9"}
          alignSelf={"center"}
          borderRadius={30}
        />
        <Typography marginLeft={3}>名前</Typography>
      </Box>
      <Box alignSelf={"center"}>
        <img src="./SearchIcon.png" />
      </Box>
    </>
  );
};

export default SearchBar;
