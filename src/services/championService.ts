import {
  OriginalChampion,
  OriginalChampions,
} from "@interfaces/championInterfaces"
import { Champion } from "@prisma/client"
import { championRepository } from "@repositories/championRepository"
import { cache } from "@utils/cacheFunctions"
import { env } from "@utils/envFunctions"
import { meraki } from "@utils/externalApi"

export const championService = {
  async findAll() {
    const champions = await championRepository.getAll()
    if (champions.length > 0) return champions

    if (env.isLocalTestMode()) {
      return await getCachedChampionsOrCacheFromExternal()
    }

    const originalChampionsData =
      await meraki.fetchFromExternalAPI<OriginalChampions>("/champions.json")
    console.log(originalChampionsData)

    const formattedChampions = formatChampions(originalChampionsData)
    await championRepository.insertAll(formattedChampions)
    const insertedChampions = await championRepository.getAll()

    return insertedChampions
  },

  async findByKey(championKey: string) {
    if (env.isLocalTestMode()) {
      return await getCachedChampionOrCacheFromExternal(championKey)
    }

    // const champion = await meraki.fetchFromExternalAPI(
    //   `/champions/${championKey}.json`,
    // )
    // await cache.writeJSONFile(cachePath, champion)

    // return champion
  },
}

function formatChampions(
  champions: OriginalChampions,
): Array<Omit<Champion, "id">> {
  console.log("Formatting...")

  return Object.keys(champions).map((championKey) => {
    const champion = champions[championKey]
    return formatChampion(champion)
  })
}

function formatChampion(champion: OriginalChampion) {
  const id: number = champion.id
  delete champion.id
  delete champion.skins

  type ChampionWithoutId = Omit<Champion, "id">

  const formattedChampion: ChampionWithoutId = {
    ...champion,
    identifier: id,
  }

  return formattedChampion
}

async function getCachedChampionsOrCacheFromExternal() {
  const cachePath = "./data/champions.json"

  const cachedChampions = await cache.loadCachedFile(cachePath)
  if (cachedChampions) return cachedChampions

  const champions = await meraki.fetchFromExternalAPI("/champions.json")
  await cache.writeJSONFile(cachePath, champions)
  return champions
}

async function getCachedChampionOrCacheFromExternal(championKey: string) {
  const cachePath = `./data/${championKey}.json`

  const cachedChampion = await cache.loadCachedFile(cachePath)
  if (cachedChampion) return cachedChampion

  const champion = await meraki.fetchFromExternalAPI(
    `/champions/${championKey}.json`,
  )
  await cache.writeJSONFile(cachePath, champion)
  return champion
}
