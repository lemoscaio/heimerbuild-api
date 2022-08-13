import { buildController } from "@controllers/buildController"
import { validateToken } from "@middlewares/validateToken"
import { Router } from "express"

export const buildRouter = Router()

buildRouter.get("/builds", validateToken, buildController.findAllByUserEmail)
