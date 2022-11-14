import dotenv from "dotenv"
import app from "./app"
dotenv.config()
import { env } from "@utils/envFunctions"

const port = +process.env.PORT || 4000

app.listen(port, () => {
  console.log(
    `Server online in ${env.appMode()} mode and listening on port ${port}`,
  )
})
