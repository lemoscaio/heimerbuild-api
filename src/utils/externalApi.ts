import { appMode } from "@/server"
import axios from "axios"
import { env } from "./envFunctions"
import { notFoundError } from "./errorUtils"

export const meraki = {
  async fetchFromExternalAPI(apiPath: string) {
    if (appMode !== "PROD") {
      console.log("Fetching on the API...")
    }

    const API_URL = `${env.getByKey("LOL_API_BASE_URL")}${apiPath}`
    try {
      const result = await axios.get(API_URL)
      return result.data
    } catch (error) {
      throw notFoundError(`Error: invalid value (${apiPath}) passed to the API`)
    }
  },
}
