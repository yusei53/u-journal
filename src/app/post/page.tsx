import { Metadata } from "next";
import ReflectionPostFormPage from "./page.client";
import getCurrentUser from "@/src/utils/actions/get-current-user";

const description = "u-journalの投稿作成ページ";
export const metadata: Metadata = {
  title: "投稿作成",
  description: description,
  openGraph: {
    type: "website",
    url: "https://u-journal.vercel.app/post",
    title: "投稿作成 | u-journal",
    description: description,
  },
  twitter: {
    title: "投稿作成 | u-journal",
    description: description,
  },
};

const page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <ReflectionPostFormPage username={currentUser?.username || undefined} />
  );
};

export default page;
