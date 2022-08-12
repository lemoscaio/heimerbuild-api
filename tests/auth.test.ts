import { prisma } from "@config/database"
import supertest from "supertest"
import app from "../src/app"
import { deleteAllData } from "./factories/scenarioFactory"
import { userFactory } from "./factories/userFactory"

const agent = supertest(app)

beforeEach(async () => {
  await deleteAllData()
})

describe("Sign-up test suite", () => {
  it("given a new user data, it should return 201 and the created user", async () => {
    const userData = userFactory.createUserData()
    const result = await agent.post("/sign-up").send(userData)

    expect(result.status).toBe(201)
    expect(result.body).toHaveProperty("id")
  })

  it("given a repeated user email, it should return 409", async () => {
    const userData = userFactory.createUserData()
    await userFactory.createUser(userData)
    const result = await agent.post("/sign-up").send(userData)

    expect(result.status).toBe(409)
  })

  it("given a bad user data (empty email), it should return 422", async () => {
    const userData = userFactory.createUserData()
    const userBadData = { ...userData, email: "" }
    const result = await agent.post("/sign-up").send(userBadData)

    expect(result.status).toBe(422)
  })

  it("given a bad user data (empty password), it should return 422", async () => {
    const userData = userFactory.createUserData()
    const userBadData = { ...userData, password: "" }
    const result = await agent.post("/sign-up").send(userBadData)

    expect(result.status).toBe(422)
  })
})

describe("Sign-in test suite", () => {
  it("given a right email and password, it should return 200 and an object containing an auth token", async () => {
    const userData = userFactory.createUserData()
    await userFactory.createUser(userData)
    const result = await agent.post("/sign-in").send(userData)

    expect(result.status).toBe(200)
    expect(result.body).toHaveProperty("token")
  })

  it("given a bad user data (empty email), it should return 422", async () => {
    const userData = userFactory.createUserData()
    const userWithEmptyPass = { ...userData, email: "" }
    const result = await agent.post("/sign-in").send(userWithEmptyPass)

    expect(result.status).toBe(422)
  })

  it("given a bad user data (empty password), it should return 422", async () => {
    const userData = userFactory.createUserData()
    const userWithEmptyPass = { ...userData, password: "" }
    const result = await agent.post("/sign-in").send(userWithEmptyPass)

    expect(result.status).toBe(422)
  })

  it("given a wrong email, it should return 401", async () => {
    const userData = userFactory.createUserData()
    const userWithWrongEmail = { ...userData, email: "wrongEmail@test.com" }
    const result = await agent.post("/sign-in").send(userWithWrongEmail)

    expect(result.status).toBe(401)
  })

  it("given a wrong password, it should return 401", async () => {
    const userData = userFactory.createUserData()
    const userWithWrongPass = { ...userData, password: "wrongPassword" }
    const result = await agent.post("/sign-in").send(userWithWrongPass)

    expect(result.status).toBe(401)
  })
})

afterAll(async () => {
  await prisma.$disconnect()
})
