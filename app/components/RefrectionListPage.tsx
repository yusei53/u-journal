import { Box } from "@mui/material";
import getCurrentUser from "../actions/getCurrentUser";
import PostCardArea from "./PostCardArea";
import { PostcardData } from "../const/PostCardData";

const RefrectionListPage = async () => {
  const currentUser = await getCurrentUser();
  // ここでPostcardDataを取得する処理を書く
  return currentUser ? (
    <PostCardArea postcardData={PostcardData} />
  ) : (
    <Box>ログインしてない</Box>
  );
};

export default RefrectionListPage;
