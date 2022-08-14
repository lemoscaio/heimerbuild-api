import { Build, Item, Stats } from "@prisma/client"

export type CreateBuildData = Omit<Build, "id">
export type CreateItemData = Omit<Item, "id">
export type CreateItemRawData = Omit<Item, "id" | "buildId">
export type CreateStatsData = Omit<Stats, "id">
export type CompleteBuild = Build & {
  items: []
  stats: Stats
}

export interface RawBuildData {
  championName: string
  championKey: string
  level: number
  cost: number
  items: RawItemsData
  stats: RawStatsData
}
export type RawItemsData = string[]
export type RawStatsData = Omit<CreateStatsData, "buildId">

export type PrismaReturnBuild = Build & {
  items: {
    itemId: string
  }[]
  stats: Stats
}
