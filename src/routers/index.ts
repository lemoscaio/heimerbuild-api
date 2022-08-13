import { Router } from "express"
import { authRouter } from "./authRouter"
import { buildRouter } from "./buildRouter"
import { dataRouter } from "./dataRouter"

export const router = Router()

router.use(authRouter)
router.use(dataRouter)
router.use(buildRouter)
