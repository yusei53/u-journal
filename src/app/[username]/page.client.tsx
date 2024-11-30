"use client";
import UserProfileArea from "@/src/components/reflection-list/profile/UserProfileArea";
import ReflectionCardListArea from "@/src/components/reflection-list/list/ReflectionCardListArea";
import { Reflection } from "@/src/api/reflection-api";
import { ReflectionsCount } from "@/src/api/reflections-count-api";
import { PostNavigationButton } from "@/src/components/shared/button";
import {
  ArrowPagination,
  NumberedPagination,
} from "@/src/components/shared/pagination";
import { useRouter } from "next/navigation";

type UserReflectionListPageProps = {
  userImage: string;
  username: string;
  reflectionCount: ReflectionsCount;
  reflections: Reflection[];
  currentPage: number;
  totalPage: number;
};

const UserReflectionListPage: React.FC<UserReflectionListPageProps> = ({
  userImage,
  username,
  reflectionCount,
  reflections,
  currentPage,
  totalPage,
}) => {
  const router = useRouter();

  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.push(`?page=${value}`);
  };

  return (
    <>
      <UserProfileArea
        userImage={userImage}
        username={username}
        reflectionCount={reflectionCount}
      />
      {reflections.length === 0 ? (
        // TODO: 自分が0の場合と、他人が0の場合でメッセージを変える
        <div>このユーザーはまだ投稿をしていません。</div>
      ) : (
        <>
          {reflections.length > 12 && (
            <ArrowPagination
              currentPage={currentPage}
              totalPage={totalPage}
              onChange={handleChange}
            />
          )}
          <ReflectionCardListArea
            username={username}
            reflections={reflections}
          />
          {reflections.length > 12 && (
            <NumberedPagination
              currentPage={currentPage}
              totalPage={totalPage}
              onChange={handleChange}
            />
          )}
        </>
      )}
      {username && (
        <PostNavigationButton
          sx={{
            position: "fixed",
            right: { xs: 40, md: 100 },
            bottom: 50,
          }}
        />
      )}
    </>
  );
};

export default UserReflectionListPage;
