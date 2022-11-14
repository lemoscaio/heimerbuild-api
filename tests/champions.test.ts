import supertest from "supertest"

import { prisma } from "@/config/database"
import app from "@/app"

const agent = supertest(app)
