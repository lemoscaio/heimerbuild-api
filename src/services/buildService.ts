import { CompleteBuild } from "@interfaces/userInterfaces"
import { Build, Stats } from "@prisma/client"
import { buildRepository } from "@repositories/buildRepository"
import { userRepository } from "@repositories/userRepository"

export const buildService = {
  async findAllByUserEmail(email: string) {
    const foundUser = await userRepository.findByEmail(email)

    const builds = await buildRepository.findAllByUserId(foundUser.id)
    console.log(
      `🚀 -> file: buildService.ts -> line 11 -> findAllByUserEmail -> builds`,
      builds,
    )

    const formattedBuilds = formatData.builds(builds)

    // return builds
    return formattedBuilds
  },
}

const formatData = {
  builds(
    builds: (Build & {
      items: {
        itemId: string
      }[]
      stats: Stats[]
    })[],
  ): CompleteBuild[] {
    return builds.map((build) => {
      const formattedBuild: any | CompleteBuild = { ...build }
      const formattedItems = formattedBuild.items.map(
        (item: { itemId: string }) => {
          return item["itemId"]
        },
      )
      formattedBuild.items = formattedItems
      formattedBuild.stats = formattedBuild.stats[0]
      delete formattedBuild.stats.id
      delete formattedBuild.stats.buildId

      return formattedBuild as CompleteBuild
    })
  },
}
