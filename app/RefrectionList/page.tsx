import { Box, Card, Typography } from "@mui/material";
import PostCardArea from "../components/PostCardArea";

const page = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        marginY={5}
      >
        <Typography fontSize={20}>振り返り一覧</Typography>
      </Box>
      <Box
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        marginY={5}
      >
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
      </Box>
      <PostCardArea />
      <Box border={2} width={"60vw"} height={100} borderColor={"#EBEEF2"}></Box>
    </Box>
  );
};

export default page;
