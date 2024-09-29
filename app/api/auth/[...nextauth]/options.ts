import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  //prismaを使うための設定
  adapter: PrismaAdapter(prisma),
  //認証プロバイダー
  providers: [
    // Google認証
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // TODO: discord認証もやりたい
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;

//メールアドレス認証もし使う時はこれ
// CredentialsProvider({
//   name: "credentials",
//   credentials: {
//     // メールアドレスとパスワード
//     email: { label: "email", type: "text" },
//     password: { label: "password", type: "password" },
//   },

//   async authorize(credentials) {
//     //メールアドレスとパスワードがない場合のエラー
//     if (!credentials?.email || !credentials?.password) {
//       throw new Error("メールアドレスとパスワードが存在しません");
//     }
//     const user = await prisma.user.findUnique({
//       where: {
//         email: credentials.email,
//       },
//     });

//     //ユーザーが存在しないエラー
//     if (!user || !user?.hashedPassword) {
//       throw new Error("ユーザーが存在しません");
//     }

//     //パスワードが一致しない時のエラー
//     const isCorrectPassword = await bcrypt.compare(
//       credentials.password,
//       user.hashedPassword
//     );

//     if (!isCorrectPassword) {
//       throw new Error("パスワードが一致しません");
//     }

//     return user;
//   },
// }),
