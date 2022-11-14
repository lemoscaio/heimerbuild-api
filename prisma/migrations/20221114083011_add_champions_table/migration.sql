-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('FIGHTER', 'JUGGERNAUT', 'TANK', 'ASSASSIN', 'BURST', 'MAGE', 'MARKSMAN', 'SUPPORT', 'VANGUARD', 'BATTLEMAGE', 'SPECIALIST', 'CATCHER', 'SKIRMISHER', 'WARDEN', 'DIVER', 'ENCHANTER', 'ARTILLERY');

-- CreateTable
CREATE TABLE "champions" (
    "id" SERIAL NOT NULL,
    "identifier" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "attackType" TEXT NOT NULL,
    "adaptativeType" TEXT NOT NULL,
    "stats" JSONB NOT NULL,
    "roles" "Roles"[],
    "attributeRatings" JSONB NOT NULL,
    "abilities" JSONB NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "releasePatch" TEXT NOT NULL,
    "patchLastChanged" TEXT NOT NULL,
    "price" JSONB NOT NULL,
    "lore" TEXT NOT NULL,
    "faction" TEXT NOT NULL,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("id")
);
