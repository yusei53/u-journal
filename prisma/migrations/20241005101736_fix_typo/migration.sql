/*
  Warnings:

  - You are about to drop the column `userid` on the `Reflection` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Reflection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reflection" DROP CONSTRAINT "Reflection_userid_fkey";

-- AlterTable
ALTER TABLE "Reflection" DROP COLUMN "userid",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Reflection" ADD CONSTRAINT "Reflection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
