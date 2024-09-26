import { Box, Typography } from "@mui/material";
import getCurrentUser from "../actions/getCurrentUser";
import PostCardArea from "./PostCardArea";
import UserNameBar from "./UserNameBar";

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
        <UserNameBar />
      </Box>
      <PostCardArea />
    </Box>
  ) : (
    <Box>ログインしてない</Box>
  );
};

export default RefrectionListPage;
