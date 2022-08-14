/*
  Warnings:

  - A unique constraint covering the columns `[buildId]` on the table `stats` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "builds" ALTER COLUMN "cost" DROP NOT NULL,
ALTER COLUMN "cost" SET DEFAULT -1;

-- CreateIndex
CREATE UNIQUE INDEX "stats_buildId_key" ON "stats"("buildId");
