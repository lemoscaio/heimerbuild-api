import { buildController } from "@controllers/buildController"
import { validateToken } from "@middlewares/validateToken"
import { Router } from "express"

export const buildRouter = Router()

buildRouter.use(validateToken)
buildRouter.get("/builds", buildController.findAllByUserId)
buildRouter.post("/builds/create", buildController.insertBuild)
buildRouter.delete("/builds/delete/:buildId", buildController.deleteBuild)
