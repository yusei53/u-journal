import { Metadata } from "next";
import LoginFormPage from "./page.client";

const description = "u-journalのログインページ";
export const metadata: Metadata = {
  title: "ログイン",
  description: description,
  openGraph: {
    type: "website",
    url: "https://u-journal.vercel.app/login",
    title: "ログイン | u-journal",
    description: description,
  },
  twitter: {
    title: "ログイン | u-journal",
    description: description,
  },
};

const page = () => {
  return <LoginFormPage />;
};

export default page;
