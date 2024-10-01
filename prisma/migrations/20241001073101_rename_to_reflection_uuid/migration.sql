/*
  Warnings:

  - The primary key for the `Reflection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Reflection` table. All the data in the column will be lost.
  - The required column `reflectionUUID` was added to the `Reflection` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Reflection" DROP CONSTRAINT "Reflection_pkey",
DROP COLUMN "id",
ADD COLUMN     "reflectionUUID" TEXT NOT NULL,
ADD CONSTRAINT "Reflection_pkey" PRIMARY KEY ("reflectionUUID");
