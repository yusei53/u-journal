import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/src/lib/prisma";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // TODO: discord認証もやりたい
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      // 前提usernameはNOT NULL制約あり
      // 初回ログイン時にusernameが設定されないため、自動で設定しておく
      if (!user.username) {
        const generatedUsername = `${user.id.slice(0, 8)}`;
        try {
          await prisma.user.update({
            where: { id: user.id },
            data: { username: generatedUsername },
          });
        } catch (error) {
          console.error("Error setting username:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session, user }) {
      if (session.user && user) {
        session.user.username = user.username;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
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
