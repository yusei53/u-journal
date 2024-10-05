/*
  Warnings:

  - You are about to drop the column `username` on the `Reflection` table. All the data in the column will be lost.
  - Added the required column `userid` to the `Reflection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reflection" DROP CONSTRAINT "Reflection_username_fkey";

-- AlterTable
ALTER TABLE "Reflection" DROP COLUMN "username",
ADD COLUMN     "userid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Reflection" ADD CONSTRAINT "Reflection_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
