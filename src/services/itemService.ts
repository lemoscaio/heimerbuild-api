import { cache } from "@utils/cacheFunctions"
import { env } from "@utils/envFunctions"
import { meraki } from "@utils/externalApi"

export const itemService = {
  async findAll() {
    const cachePath = "./data/items.json"

    if (env.isLocalTestMode()) {
      const cachedItems = await cache.loadCachedFile(cachePath)
      if (cachedItems) return cachedItems
      const items = await meraki.fetchFromExternalAPI("/items.json")
      await cache.writeJSONFile(cachePath, items)
      return items
    }

    const items = await meraki.fetchFromExternalAPI("/items.json")
    // await cache.writeJSONFile(cachePath, items)
    return items
  },

  async findById(itemId: string) {
    const cachePath = `./data/${itemId}.json`

    if (env.isLocalTestMode()) {
      const cachedItem = await cache.loadCachedFile(cachePath)
      if (cachedItem) return cachedItem
      const item = await meraki.fetchFromExternalAPI(`/items/${itemId}.json`)
      await cache.writeJSONFile(cachePath, item)
      return item
    }

    const item = await meraki.fetchFromExternalAPI(`/items/${itemId}.json`)
    // await cache.writeJSONFile(cachePath, item)

    return item
  },
}
