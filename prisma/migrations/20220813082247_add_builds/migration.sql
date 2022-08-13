-- CreateTable
CREATE TABLE "builds" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "championName" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,

    CONSTRAINT "builds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "buildId" INTEGER NOT NULL,
    "attackDamage" INTEGER NOT NULL,
    "abilityPower" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "magicResistance" INTEGER NOT NULL,
    "attackSpeed" INTEGER NOT NULL,
    "abilityHaste" INTEGER NOT NULL,
    "criticalStrike" INTEGER NOT NULL,
    "movespeed" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "healthRegen" INTEGER NOT NULL,
    "mana" INTEGER NOT NULL,
    "manaRegen" INTEGER NOT NULL,
    "lethality" INTEGER NOT NULL,
    "armorPenetration" INTEGER NOT NULL,
    "flatMagicPenetration" INTEGER NOT NULL,
    "percentageMagicPenetration" INTEGER NOT NULL,
    "lifeSteal" INTEGER NOT NULL,
    "physicalVamp" INTEGER NOT NULL,
    "omniVamp" INTEGER NOT NULL,
    "attackRange" INTEGER NOT NULL,
    "tenacity" INTEGER NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "buildId" INTEGER NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "builds" ADD CONSTRAINT "builds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "builds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "builds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
