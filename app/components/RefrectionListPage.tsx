import { Box, Typography } from "@mui/material";
import getCurrentUser from "../actions/getCurrentUser";
import PostCardArea from "./PostCardArea";
import SearchBar from "./SearchBar";

const RefrectionListPage = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
    <Box>
      <Box
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        marginY={5}
        flexDirection={"column"}
      >
        <Typography fontSize={20}>振り返り一覧</Typography>
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

export default RefrectionListPage;
