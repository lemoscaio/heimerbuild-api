import { championController } from "@controllers/championController"
import { itemController } from "@controllers/itemController"
import { Router } from "express"

const dataRouter = Router()

dataRouter.get("/champions", championController.findAll)
dataRouter.get("/champions/:championKey", championController.findByKey)
dataRouter.get("/items", itemController.findAll)
dataRouter.get("/items/:itemId", itemController.findAll)

export default dataRouter
