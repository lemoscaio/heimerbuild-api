/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_buildId_fkey";

-- DropTable
DROP TABLE "Item";

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "buildId" INTEGER NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "builds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
