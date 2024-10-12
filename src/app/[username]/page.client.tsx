"use client";
import { useParams } from "next/navigation";
import { useReflectionsByUsername } from "@/src/hooks/reflection/useReflectionsByUsername";
import UserReflectionListArea from "@/src/components/reflection/UserReflectionListArea";
import { Calendar } from "@/src/components/calendar";

const UserReflectionListPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const {
    data: reflectionsWithUser,
    isLoading,
    error,
  } = useReflectionsByUsername(username);
  if (!reflectionsWithUser) {
    return undefined;
  }

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    // TODO: このエラーメッセージはいろんなところで使い回しできるので共通コンポーネント実装したい
    return <div>エラーが発生しました: {error.message}</div>;
  }
  if (reflectionsWithUser?.reflections.length === 0) {
    // TODO: このメッセージはデザイン含めもう少し工夫したい
    return <div>このユーザーはまだ投稿をしていません。</div>;
  }

  return (
    <>
      <UserReflectionListArea
        userImage={reflectionsWithUser.userImage}
        username={username}
        reflections={reflectionsWithUser.reflections}
      />
      <Calendar username={username} />
    </>
  );
};

export default UserReflectionListPage;
