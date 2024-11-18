import { Metadata } from "next";
import LoginFormPage from "./page.client";

const description = "リフティのログインページ";
export const metadata: Metadata = {
  title: "ログイン",
  description: description,
  openGraph: {
    type: "website",
    url: "https://www.refty.jp/login",
    title: "ログイン | リフティ",
    description: description,
  },
  twitter: {
    title: "ログイン | リフティ",
    description: description,
  },
};

const page = () => {
  return <LoginFormPage />;
};

export default page;
