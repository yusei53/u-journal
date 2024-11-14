import { reflectionAPI } from "@/src/api/reflection-api";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { notFound } from "next/navigation";
import RootPage from "../../page.client";
import { Metadata } from "next";

const description = "u-journalのユーザーネーム設定ページ";
export const metadata: Metadata = {
  title: "ユーザーネーム設定",
  description: description,
  openGraph: {
    type: "website",
    url: "https://u-journal.vercel.app/setting/username",
    title: "ユーザーネーム設定 | u-journal",
    description: description,
  },
  twitter: {
    title: "ユーザーネーム設定 | u-journal",
    description: description,
  },
};

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentUser = await getCurrentUser();
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const result = await reflectionAPI.getReflectionAll();
  if (result === 404) {
    return notFound();
  }

  return (
    <RootPage
      open
      currentUsername={currentUser?.username || null}
      reflections={result.reflections}
      currentPage={currentPage}
      totalPage={result.totalPage}
    />
  );
};

export default page;
