import { Box } from "@mui/material";
import getCurrentUser from "../actions/getCurrentUser";
import ReflectionCardArea from "./ReflectionCardArea";
import { ReflectionCardData } from "../const/ReflectionCardData";

const ReflectionListPage = async () => {
  const currentUser = await getCurrentUser();
  // ここでReflectioncardDataを取得する処理を書く
  return currentUser ? (
    <ReflectionCardArea ReflectionCardData={ReflectionCardData} />
  ) : (
    <Box>ログインしてない</Box>
  );
};

export default ReflectionListPage;
