/*
  Warnings:

  - The primary key for the `Reflection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `reflectionCUID` on the `Reflection` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "Reflection" DROP CONSTRAINT "Reflection_pkey",
ALTER COLUMN "reflectionCUID" SET DATA TYPE VARCHAR(30),
ADD CONSTRAINT "Reflection_pkey" PRIMARY KEY ("reflectionCUID");
