import { Metadata } from "next";
import LoginFormPage from "./page.client";

export const metadata: Metadata = {
  title: "ログイン",
};

const page = () => {
  return <LoginFormPage />;
};

export default page;
