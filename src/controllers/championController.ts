import { championService } from "@services/championService"
import { Request, Response } from "express"

export const championController = {
  async findAll(req: Request, res: Response) {
    const champions = await championService.findAll()

    res.send(champions)
  },

  async findByKey(req: Request, res: Response) {
    const { championKey } = req.params

    const champion = await championService.findByKey(championKey)

    res.send(champion)
  },
}
