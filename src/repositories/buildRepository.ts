import { prisma } from "@config/database"

export const buildRepository = {
  findAllByUserId(userId: number) {
    return prisma.build.findMany({
      where: { userId: userId },
      include: { items: { select: { itemId: true } }, stats: true },
      orderBy: { id: "desc" },
    })
  },
}
