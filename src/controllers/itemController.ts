import { itemService } from "@services/itemService"
import { Request, Response } from "express"

export const itemController = {
  async findAll(req: Request, res: Response) {
    const items = await itemService.findAll()

    res.send(items)
  },

  async findById(req: Request, res: Response) {
    const { itemId } = req.params

    const item = await itemService.findById(itemId)

    res.send(item)
  },
}
