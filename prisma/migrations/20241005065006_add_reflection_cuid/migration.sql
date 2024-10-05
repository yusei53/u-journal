/*
  Warnings:

  - A unique constraint covering the columns `[reflectionCUID]` on the table `Reflection` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Reflection" ADD COLUMN     "reflectionCUID" VARCHAR(30);

-- CreateIndex
CREATE UNIQUE INDEX "Reflection_reflectionCUID_key" ON "Reflection"("reflectionCUID");
