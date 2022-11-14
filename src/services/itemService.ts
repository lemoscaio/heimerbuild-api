import { cache } from "@utils/cacheFunctions"
import { env } from "@utils/envFunctions"
import { meraki } from "@utils/externalApi"

export const itemService = {
  async findAll() {
    if (env.isLocalTestMode()) {
      return await getCachedItemsOrCacheFromExternal()
    }

    // const items = await meraki.fetchFromExternalAPI("/items.json")
    // await cache.writeJSONFile(cachePath, items)
    // return items
  },

  async findById(itemId: string) {
    if (env.isLocalTestMode()) {
      return await getCachedItemOrCacheFromExternal(itemId)
    }

    // const item = await meraki.fetchFromExternalAPI(`/items/${itemId}.json`)
    // await cache.writeJSONFile(cachePath, item)

    // return item
  },
}

async function getCachedItemsOrCacheFromExternal() {
  const cachePath = "./data/items.json"

  const cachedItems = await cache.loadCachedFile(cachePath)
  if (cachedItems) return cachedItems
  const items = await meraki.fetchFromExternalAPI("/items.json")
  await cache.writeJSONFile(cachePath, items)
  return items
}

async function getCachedItemOrCacheFromExternal(itemId: string) {
  const cachePath = `./data/${itemId}.json`

  const cachedItem = await cache.loadCachedFile(cachePath)
  if (cachedItem) return cachedItem
  const item = await meraki.fetchFromExternalAPI(`/items/${itemId}.json`)
  await cache.writeJSONFile(cachePath, item)
  return item
}
