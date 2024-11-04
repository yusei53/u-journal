import { reflectionsCountAPI } from "@/src/api/reflections-count-api";
import UserReflectionListPage from "./page.client";
import { reflectionAPI } from "@/src/api/reflection-api";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { username: string } }) => {
  const { username } = params;

  const countResult = await reflectionsCountAPI.getReflectionsCount(username);
  const reflectionsResult = await reflectionAPI.getReflectionsByUsername(
    username
  );

  if (countResult === 404 || reflectionsResult === 404) {
    return notFound();
  }

  // MEMO: 並列データフェッチ
  const [reflectionCount, reflectionsWithUser] = await Promise.all([
    countResult,
    reflectionsResult,
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
