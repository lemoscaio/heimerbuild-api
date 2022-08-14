import { RawBuildData } from "@interfaces/buildInterfaces"
import { buildService } from "@services/buildService"
import { Request, Response } from "express"

export const buildController = {
  async findAllByUserId(req: Request, res: Response) {
    const { user } = res.locals

    const builds = await buildService.findAllByUserId(user.id)

    res.send(builds)
  },

  async insertBuild(req: Request, res: Response) {
    const { user } = res.locals
    const build: RawBuildData = req.body

    const insertedBuild = await buildService.insertBuild(user.id, build)

    res.send(insertedBuild)
  },

  async deleteBuild(req: Request, res: Response) {
    const { user } = res.locals
    const { buildId } = req.params

    await buildService.deleteBuild(user.id, Number(buildId))

    res.sendStatus(200)
  },
}
