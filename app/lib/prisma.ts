import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// PrismaClientのインスタンス作成
const client = globalThis.prisma || new PrismaClient();

//開発環境と本番環境で異なる動作をするように設計
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
