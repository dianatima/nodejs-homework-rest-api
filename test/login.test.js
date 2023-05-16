require("dotenv").config();
const app = require("../app");
const testReq = require("supertest");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

describe("login", () => {
  let token;

  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST)
      .then(() => console.log("DB Connected"))
      .catch((err) => {
        console.log(err);
      });
  });

  it("should return status 200", async () => {
    const response = await testReq(app).post("/api/auth/login").send({
      email: "em2@gmail.com",
      password: "0922222222",
    });
    expect(response.statusCode).toBe(200);
  });

  it("should return a token", async () => {
    const response = await testReq(app).post("/api/auth/login").send({
      email: "em2@gmail.com",
      password: "0922222222",
    });
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
  });

  it("should return an object with fields email and subscription", async () => {
    const response = await testReq(app)
      .get("/api/users/current")
      .set("Authorization", `Bearer ${token}`);

    expect(response.body).toHaveProperty("email", "em2@gmail.com");
    expect(response.body).toHaveProperty("subscription", "starter");
  });

  afterAll(async () => {
    await mongoose
      .disconnect(DB_HOST)
      .then(() => console.log("DB Disconnected"))
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
  });
});
