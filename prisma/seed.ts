import { prisma } from "./../src/config/database"
import {
  CreateBuildData,
  CreateItemData,
  CreateStatsData,
} from "./../src/interfaces/buildInterfaces"
import { CreateUserData } from "./../src/interfaces/userInterfaces"
import { encrypt } from "./../src/utils/encryptFunctions"

async function main() {
  const user: CreateUserData = {
    email: "admin@admin.com",
    password: encrypt.bcrypt.encryptPassword("admin123"),
  }

  const build: CreateBuildData = {
    championName: "Quinn",
    championKey: "Quinn",
    cost: 15000,
    level: 18,
    userId: 1,
  }

  const items: CreateItemData[] = [
    { buildId: 1, itemId: "1001" },
    { buildId: 1, itemId: "1004" },
    { buildId: 1, itemId: "1006" },
    { buildId: 1, itemId: "3001" },
    { buildId: 1, itemId: "3004" },
  ]

  const stats: CreateStatsData = {
    buildId: 1,
    attackDamage: 350,
    abilityPower: 350,
    armor: 350,
    magicResistance: 350,
    attackSpeed: 350,
    abilityHaste: 350,
    criticalStrike: 350,
    movespeed: 350,
    health: 350,
    healthRegen: 350,
    mana: 350,
    manaRegen: 350,
    lethality: 350,
    armorPenetration: 350,
    flatMagicPenetration: 100,
    percentageMagicPenetration: 35,
    lifeSteal: 350,
    physicalVamp: 350,
    omniVamp: 350,
    attackRange: 350,
    tenacity: 350,
  }

  await prisma.user.create({ data: user })
  await prisma.build.create({ data: build })
  await prisma.item.createMany({ data: items })
  await prisma.stats.create({ data: stats })

  const build2: CreateBuildData = {
    championName: "Volibear",
    championKey: "Volibear",
    cost: 13000,
    level: 14,
    userId: 1,
  }

  const items2: CreateItemData[] = [
    { buildId: 2, itemId: "1001" },
    { buildId: 2, itemId: "1004" },
    { buildId: 2, itemId: "1006" },
    { buildId: 2, itemId: "3001" },
    { buildId: 2, itemId: "3004" },
  ]

  const stats2: CreateStatsData = {
    buildId: 2,
    attackDamage: 270,
    abilityPower: 270,
    armor: 270,
    magicResistance: 270,
    attackSpeed: 270,
    abilityHaste: 270,
    criticalStrike: 270,
    movespeed: 270,
    health: 270,
    healthRegen: 270,
    mana: 270,
    manaRegen: 270,
    lethality: 270,
    armorPenetration: 270,
    flatMagicPenetration: 100,
    percentageMagicPenetration: 35,
    lifeSteal: 270,
    physicalVamp: 270,
    omniVamp: 270,
    attackRange: 270,
    tenacity: 270,
  }

  await prisma.build.create({ data: build2 })
  await prisma.item.createMany({ data: items2 })
  await prisma.stats.create({ data: stats2 })
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
