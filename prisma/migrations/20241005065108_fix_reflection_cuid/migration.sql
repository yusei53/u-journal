/*
  Warnings:

  - The primary key for the `Reflection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `reflectionUUID` on the `Reflection` table. All the data in the column will be lost.
  - Made the column `reflectionCUID` on table `Reflection` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Reflection_reflectionCUID_key";

-- AlterTable
ALTER TABLE "Reflection" DROP CONSTRAINT "Reflection_pkey",
DROP COLUMN "reflectionUUID",
ALTER COLUMN "reflectionCUID" SET NOT NULL,
ALTER COLUMN "reflectionCUID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Reflection_pkey" PRIMARY KEY ("reflectionCUID");
