"use client";
import { useParams } from "next/navigation";
import { useReflectionsByUsername } from "@/src/hooks/reflection/useReflectionsByUsername";
import UserProfileArea from "@/src/components/user-reflection-list/profile/UserProfileArea";
import ReflectionCardListArea from "@/src/components/user-reflection-list/reflection-list/ReflectionCardListArea";
import { Suspense } from "react";
import { Loader } from "@/src/components/shared/loading";

const UserReflectionListPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const {
    data: reflectionsWithUser,
    isFetching,
    isLoading,
    isPending,
    error,
  } = useReflectionsByUsername(username);
  if (!reflectionsWithUser) {
    return undefined;
  }

  if (isFetching || isLoading || isPending) {
    return <Loader />;
  }

  if (error) {
    // TODO: このエラーメッセージはいろんなところで使い回しできるので共通コンポーネント実装したい
    return <div>エラーが発生しました: {error.message}</div>;
  }

  return (
    <>
      <UserProfileArea
        userImage={reflectionsWithUser.userImage}
        username={username}
      />
      {reflectionsWithUser.reflections.length === 0 ? (
        // TODO: このメッセージはデザイン含めもう少し工夫したい
        <div>このユーザーはまだ投稿をしていません。</div>
      ) : (
        <Suspense fallback={<Loader />}>
          <ReflectionCardListArea
            username={username}
            reflections={reflectionsWithUser.reflections}
          />
        </Suspense>
      )}
    </>
  );
};

export default UserReflectionListPage;
