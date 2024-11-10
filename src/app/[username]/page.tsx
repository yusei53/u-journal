import { reflectionsCountAPI } from "@/src/api/reflections-count-api";
import UserReflectionListPage from "./page.client";
import { reflectionAPI } from "@/src/api/reflection-api";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import opengraphAPI from "@/src/api/opengraph-api";

export const generateMetadata = async ({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> => {
  const { username } = params;
  const userInformation = await opengraphAPI.getOGPByUsername(username);
  if (userInformation === 404) {
    return {
      title: "404 | u-journal",
      description: "このページは見つかりません",
      openGraph: {
        type: "website",
        title: "404 | u-journal",
        description: "存在しないユーザーです",
        siteName: "u-journal",
      },
    };
  }

  return {
    title: `${username} | Overview`,
    description: `${username} has ${userInformation.totalReflections} reflections`,
    openGraph: {
      type: "website",
      url: `https://u-journal.vercel.app/${username}`,
      title: `${username} | Overview`,
      description: `${username} has ${userInformation.totalReflections} reflections`,
      siteName: "u-journal",
    },
    twitter: {
      title: `${username} | Overview`,
      description: `${username} has ${userInformation.totalReflections} reflections`,
      card: "summary",
    },
  };
};

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
    <>
      <UserReflectionListPage
        userImage={reflectionsWithUser.userImage}
        username={username}
        reflectionCount={reflectionCount}
        reflections={reflectionsWithUser.reflections}
      />
    </>
  );
};

export default page;
