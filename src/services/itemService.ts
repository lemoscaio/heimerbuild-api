import { appMode } from "@/server"
import { cache } from "@utils/cacheFunctions"
import { meraki } from "@utils/externalApi"

export const itemService = {
  async findAll() {
    const cachePath = "./data/items.json"

    if (appMode === "DEV" || appMode === "TEST") {
      const cachedItems = await cache.loadCachedFile(cachePath)
      if (cachedItems) return cachedItems
    }

    const items = await meraki.fetchFromExternalAPI("/items.json")
    await cache.writeJSONFile(cachePath, items)
    return items
  },

  async findById(itemId: string) {
    const cachePath = `./data/${itemId}.json`

    if (appMode === "DEV" || appMode === "TEST") {
      const cachedItem = await cache.loadCachedFile(cachePath)
      if (cachedItem) return cachedItem
    }

    const item = await meraki.fetchFromExternalAPI(`/items/${itemId}.json`)
    await cache.writeJSONFile(cachePath, item)

    return item
  },
}
