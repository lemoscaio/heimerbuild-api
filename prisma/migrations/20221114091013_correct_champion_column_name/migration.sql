/*
  Warnings:

  - You are about to drop the column `adaptativeType` on the `champions` table. All the data in the column will be lost.
  - Added the required column `adaptiveType` to the `champions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "champions" DROP COLUMN "adaptativeType",
ADD COLUMN     "adaptiveType" TEXT NOT NULL;
