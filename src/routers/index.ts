import { Router } from "express"
import dataRouter from "./dataRouter"

export const router = Router()

router.use(dataRouter)
