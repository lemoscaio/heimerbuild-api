import { Build, Item, Stats, User } from "@prisma/client"

export type CreateUserData = Omit<User, "id">
export type CreateBuildData = Omit<Build, "id">
export type CreateItemData = Omit<Item, "id">
export type CreateStatsData = Omit<Stats, "id">
export type CompleteBuild = Build & {
  items: []
  stats: Stats
}
