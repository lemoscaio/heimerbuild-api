import { prisma } from "@config/database"
import { Champion } from "@prisma/client"

export const championRepository = {
  getAll() {
    return prisma.champion.findMany()
  },
  insertAll(champions: Array<Omit<Champion, "id">>) {
    return prisma.champion.createMany({ data: champions, skipDuplicates: true })
  },
}
