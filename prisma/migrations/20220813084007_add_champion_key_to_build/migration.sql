/*
  Warnings:

  - Added the required column `championKey` to the `builds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "builds" ADD COLUMN     "championKey" TEXT NOT NULL;
