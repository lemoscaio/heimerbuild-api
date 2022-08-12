import { Router } from "express"
import { authRouter } from "./authRouter"
import { dataRouter } from "./dataRouter"

export const router = Router()

router.use(authRouter)
router.use(dataRouter)
