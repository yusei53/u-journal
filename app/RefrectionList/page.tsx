import { Box, Typography } from "@mui/material";
import PostCardArea from "../components/PostCardArea";
import SearchBar from "../components/SearchBar";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
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
        <SearchBar />
      </Box>
      <PostCardArea />
      <Box
        border={2}
        width={"60vw"}
        height={100}
        borderColor={"#EBEEF2"}
        borderRadius={10}
      >
        <Box
          width={30}
          height={30}
          bgcolor={"#d9d9d9"}
          alignSelf={"center"}
          borderRadius={30}
        />
      </Box>
    </Box>
  ) : (
    <Box>ログインしてない</Box>
  );
};

export default page;
