import { reflectionsCountAPI } from "@/src/api/reflections-count-api";
import UserReflectionListPage from "./page.client";
import { reflectionAPI } from "@/src/api/reflection-api";

const page = async ({ params }: { params: { username: string } }) => {
  const { username } = params;

  const reflectionCountPromise =
    reflectionsCountAPI.getReflectionsCount(username);
  const reflectionsWithUserPromise =
    reflectionAPI.getReflectionsByUsername(username);

  // MEMO: 並列データフェッチ
  const [reflectionCount, reflectionsWithUser] = await Promise.all([
    reflectionCountPromise,
    reflectionsWithUserPromise,
  ]);

  return (
    <UserReflectionListPage
      userImage={reflectionsWithUser.userImage}
      username={username}
      reflectionCount={reflectionCount}
      reflections={reflectionsWithUser.reflections}
    />
  );
};

export default page;
