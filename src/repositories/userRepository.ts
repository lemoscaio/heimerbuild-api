import { prisma } from "@config/database"
import { CreateUserData } from "src/interfaces/userInterfaces"

export const userRepository = {
  register(data: CreateUserData) {
    return prisma.user.create({ data })
  },

  findByEmail(email: string) {
    return prisma.user.findFirst({
      where: { email: { equals: email, mode: "insensitive" } },
    })
  },
}
