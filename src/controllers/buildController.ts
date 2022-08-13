import { userRepository } from "@repositories/userRepository"
import { buildService } from "@services/buildService"
import { Request, Response } from "express"

export const buildController = {
  async findAllByUserEmail(req: Request, res: Response) {
    const { user } = res.locals

    const builds = await buildService.findAllByUserEmail(user.email)

    res.send(builds)
  },
}
