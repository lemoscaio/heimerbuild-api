import { championController } from "@controllers/championController"
import { Router } from "express"

const dataRouter = Router()

dataRouter.get("/champions", championController.findAll)
dataRouter.get("/champions/:championKey", championController.findByKey)

export default dataRouter
