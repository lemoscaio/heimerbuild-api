import { prisma } from "@config/database"

export async function deleteAllData() {
  return prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`,
  ])
}
