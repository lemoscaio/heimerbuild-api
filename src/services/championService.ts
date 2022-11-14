import { cache } from "@utils/cacheFunctions"
import { env } from "@utils/envFunctions"
import { meraki } from "@utils/externalApi"

export const championService = {
  async findAll() {
    const cachePath = "./data/champions.json"

    if (env.isLocalTestMode()) {
      const cachedChampions = await cache.loadCachedFile(cachePath)
      if (cachedChampions) return cachedChampions
      const champions = await meraki.fetchFromExternalAPI("/champions.json")
      await cache.writeJSONFile(cachePath, champions)
      return champions
    }

    const champions = await meraki.fetchFromExternalAPI("/champions.json")
    // await cache.writeJSONFile(cachePath, champions)

    return champions
  },

  async findByKey(championKey: string) {
    const cachePath = `./data/${championKey}.json`

    if (env.isLocalTestMode()) {
      const cachedChampion = await cache.loadCachedFile(cachePath)
      if (cachedChampion) return cachedChampion
      const champion = await meraki.fetchFromExternalAPI(
        `/champions/${championKey}.json`,
      )
      await cache.writeJSONFile(cachePath, champion)
      return champion
    }

    const champion = await meraki.fetchFromExternalAPI(
      `/champions/${championKey}.json`,
    )
    // await cache.writeJSONFile(cachePath, champion)

    return champion
  },
}
