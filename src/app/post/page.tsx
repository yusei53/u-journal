import { Metadata } from "next";
import ReflectionPostFormPage from "./page.client";
import getCurrentUser from "@/src/utils/actions/get-current-user";

export const metadata: Metadata = {
  title: "投稿作成",
};

const page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <ReflectionPostFormPage username={currentUser?.username || undefined} />
  );
};

export default page;
