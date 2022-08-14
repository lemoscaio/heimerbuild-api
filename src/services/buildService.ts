import {
  CompleteBuild,
  PrismaReturnBuild,
  RawBuildData,
} from "@interfaces/buildInterfaces"
import { Build, Stats } from "@prisma/client"
import { buildRepository } from "@repositories/buildRepository"
import { notFoundError, unauthorizedError } from "@utils/errorUtils"

export const buildService = {
  async findAllByUserId(id: number) {
    const builds = await buildRepository.findAllByUserId(id)
    console.log(
      `🚀 -> file: buildService.ts -> line 11 -> findAllByUserEmail -> builds`,
      builds,
    )

    const formattedBuilds = formatData.builds(builds)

    return formattedBuilds
  },

  async insertBuild(userId: number, build: RawBuildData) {
    const { items, stats, ...onlyBuildData } = build

    const itemsData = items.map((item) => {
      return { itemId: item }
    })

    const buildData = { userId, ...onlyBuildData }

    const insertedBuild = await buildRepository.insertBuild(
      buildData,
      itemsData,
      stats,
    )

    const formattedBuilds = formatData.build(insertedBuild)

    return formattedBuilds
  },

  async deleteBuild(userId: number, buildId: number) {
    const foundBuild = await buildRepository.findById(buildId)
    console.log(
      `🚀 -> file: buildService.ts -> line 41 -> deleteBuild -> foundBuild`,
      foundBuild,
    )

    if (!foundBuild) throw notFoundError("This build doesn't exist")
    if (foundBuild.userId !== userId)
      throw unauthorizedError("This build doesn't belong to the user")

    const deletedBuild = await buildRepository.deletebuild(userId, buildId)

    const failedDelete = deletedBuild.every((attempt) => {
      return attempt.count === 0
    })
    if (failedDelete) throw notFoundError("Something went wrong")

    return deletedBuild
  },
}

const formatData = {
  build(build: PrismaReturnBuild) {
    const formattedBuild: any | CompleteBuild = { ...build }
    const formattedItems = formattedBuild.items.map(
      (item: { itemId: string }) => {
        return item["itemId"]
      },
    )
    formattedBuild.items = formattedItems
    delete formattedBuild.stats.id
    delete formattedBuild.stats.buildId

    return formattedBuild as CompleteBuild
  },

  builds(builds: PrismaReturnBuild[]): CompleteBuild[] {
    return builds.map(this.build)
  },
}
