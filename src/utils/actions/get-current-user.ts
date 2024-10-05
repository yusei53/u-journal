"use server";
import { getServerSession } from "next-auth";
import authOptions from "../../app/api/auth/[...nextauth]/options";
import prisma from "@/src/lib/prisma";

// APIルートやサーバーサイドででユーザー情報が必要な場合に使用
const getCurrentUser = async () => {
  try {
    //セッション情報取得
    const session = await getServerSession(authOptions);

    //ログインしていない場合
    if (!session?.user?.email) {
      return null;
    }

    //ログインユーザー取得
    const response = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!response) {
      return null;
    }

    return response;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
