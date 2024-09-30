import { Box } from "@mui/material";

import ReflectionCardArea from "./ReflectionCardArea";
import getCurrentUser from "../utils/actions/getCurrentUser";
import { ReflectionCardData } from "../mock/ReflectionCardData";

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
