"use client";
import UserProfileArea from "@/src/components/reflection-list/profile/UserProfileArea";
import ReflectionCardListArea from "@/src/components/reflection-list/list/ReflectionCardListArea";
import { Reflection } from "@/src/api/reflection-api";
import { ReflectionsCount } from "@/src/api/reflections-count-api";
import { PostNavigationButton } from "@/src/components/shared/button";

type UserReflectionListPageProps = {
  userImage: string;
  username: string;
  reflectionCount: ReflectionsCount;
  reflections: Reflection[];
};

const UserReflectionListPage: React.FC<UserReflectionListPageProps> = ({
  userImage,
  username,
  reflectionCount,
  reflections,
}) => {
  return (
    <>
      <UserProfileArea
        userImage={userImage}
        username={username}
        reflectionCount={reflectionCount}
      />
      {reflections.length === 0 ? (
        // TODO: このメッセージはデザイン含めもう少し工夫したい
        <div>このユーザーはまだ投稿をしていません。</div>
      ) : (
        <ReflectionCardListArea username={username} reflections={reflections} />
      )}
      <PostNavigationButton
        sx={{
          position: "fixed",
          right: { xs: 40, md: 100 },
          bottom: 50,
        }}
      />
    </>
  );
};

export default UserReflectionListPage;
