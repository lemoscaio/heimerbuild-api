import { meraki } from "@utils/externalApi"
import { cache } from "@utils/cacheFunctions"
import { env } from "@utils/envFunctions"
import { appMode } from "@/server"

export const championService = {
  async findAll() {
    const cachePath = "./data/champions.json"

    if (appMode === "DEV" || appMode === "TEST") {
      const cachedChampions = await cache.loadCachedFile(cachePath)
      if (cachedChampions) return cachedChampions
    }

    const champions = await meraki.fetchFromExternalAPI("/champions.json")
    await cache.writeJSONFile(cachePath, champions)
    return champions
  },

  async findByKey(championKey: string) {
    const cachePath = `./data/${championKey}.json`

    if (appMode === "DEV" || appMode === "TEST") {
      const cachedChampion = await cache.loadCachedFile(cachePath)
      if (cachedChampion) return cachedChampion
    }

    const champion = await meraki.fetchFromExternalAPI(
      `/champions/${championKey}.json`,
    )
    await cache.writeJSONFile(cachePath, champion)

    return champion
  },
}
