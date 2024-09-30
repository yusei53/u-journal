import { Box } from "@mui/material";

import ReflectionCardArea from "../reflection/mypage/ReflectionCardArea";
import getCurrentUser from "../../utils/actions/get-current-user";
import { ReflectionCardData } from "../../mock/reflection-card-data";

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
