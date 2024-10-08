/*
  Warnings:

  - You are about to drop the column `userId` on the `Reflection` table. All the data in the column will be lost.
  - Added the required column `username` to the `Reflection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reflection" DROP CONSTRAINT "Reflection_userId_fkey";

-- AlterTable
ALTER TABLE "Reflection" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Reflection" ADD CONSTRAINT "Reflection_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
