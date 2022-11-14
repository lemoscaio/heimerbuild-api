import axios from "axios"
import { env } from "./envFunctions"
import { notFoundError } from "./errorUtils"

export const meraki = {
  async fetchFromExternalAPI<T = any>(apiPath: string) {
    if (env.itNotProdMode()) {
      console.log("Fetching on the API...")
    }

    const API_URL = `${env.getByKey("LOL_API_BASE_URL")}${apiPath}`
    try {
      const result = await axios.get<T>(API_URL)
      return result.data
    } catch (error) {
      throw notFoundError(`Error: invalid value (${apiPath}) passed to the API`)
    }
  },
}
