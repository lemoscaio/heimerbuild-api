import { getBaseUrl } from "@utils/apiPaths"
import axios from "axios"

export const championService = {
  async findAll() {
    const API_URL = `${getBaseUrl()}/champions.json`
    const result = await axios.get(API_URL)

    const champions = result.data

    return champions
  },

  async findByKey(championKey: string) {
    const API_URL = `${getBaseUrl()}/champions/${championKey}.json`

    const result = await axios.get(API_URL)

    const champion = result.data

    return champion
  },
}
