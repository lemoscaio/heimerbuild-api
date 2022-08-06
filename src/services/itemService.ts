import { getBaseUrl } from "@utils/apiPaths"
import axios from "axios"

export const itemService = {
  async findAll() {
    const API_URL = `${getBaseUrl()}/items.json`
    const result = await axios.get(API_URL)

    const items = result.data

    return items
  },

  async findById(itemId: string) {
    const API_URL = `${getBaseUrl()}/items/${itemId}.json`

    const result = await axios.get(API_URL)

    const item = result.data

    return item
  },
}
