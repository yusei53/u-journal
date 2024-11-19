"use client";
import UserProfileArea from "@/src/components/reflection-list/profile/UserProfileArea";
import ReflectionCardListArea from "@/src/components/reflection-list/reflection-list/ReflectionCardListArea";
import { Reflection } from "@/src/api/reflection-api";
import { ReflectionsCount } from "@/src/api/reflections-count-api";

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
    </>
  );
};

export default UserReflectionListPage;
