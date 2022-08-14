import { prisma } from "@config/database"
import {
  CreateBuildData,
  CreateItemRawData,
  RawStatsData,
} from "@interfaces/buildInterfaces"

export const buildRepository = {
  findAllByUserId(userId: number) {
    return prisma.build.findMany({
      where: { userId: userId },
      include: { items: { select: { itemId: true } }, stats: true },
      orderBy: { id: "desc" },
    })
  },

  findById(buildId: number) {
    return prisma.build.findFirst({ where: { id: buildId } })
  },

  insertBuild(
    buildData: CreateBuildData,
    itemsData: CreateItemRawData[],
    statsData: RawStatsData,
  ) {
    return prisma.build.create({
      data: {
        ...buildData,
        items: { createMany: { data: itemsData } },
        stats: { create: statsData },
      },
      include: { items: { select: { itemId: true } }, stats: true },
    })
  },

  deletebuild(userId: number, buildId: number) {
    const deleteStats = prisma.stats.deleteMany({
      where: { buildId: buildId },
    })

    const deleteItems = prisma.item.deleteMany({ where: { buildId: buildId } })

    const deleteBuild = prisma.build.deleteMany({
      where: { AND: { id: buildId, userId: userId } },
    })

    return prisma.$transaction([deleteStats, deleteItems, deleteBuild])
  },
}
