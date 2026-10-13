import { describe, expect, it } from "@jest/globals";
import request from "supertest";

import { app } from "../index.js";

const testUser = {
  age: 1000,
  id: "12345",
  isAlive: false,
  name: "Marcelina",
};

describe("users routes", () => {
  it("should create a user and return the same user from get by id", async () => {
    const createUserResponse = await request(app).post("/").send(testUser);

    expect(createUserResponse.status).toBe(200);
    expect(createUserResponse.body).toStrictEqual({ status: "criado" });

    const getUserResponse = await request(app).get(`/${testUser.id}`);
    expect(getUserResponse.status).toBe(200);
    expect(getUserResponse.status).not.toBe(404);
    expect(getUserResponse.body).toStrictEqual(testUser);
  });

  it("should return a list with one user", async () => {
    const getAllResponse = await request(app).get("/");
    expect(getAllResponse.body).toHaveLength(1);
    expect(getAllResponse.status).toBe(200);
  });

  it("should return a empty list", async () => {
    const deleteResponse = await request(app).delete(`/${testUser.id}`);

    expect(deleteResponse.body).toStrictEqual(testUser);
    expect(deleteResponse.status).toBe(200);

    const getAllResponse = await request(app).get("/");
    expect(getAllResponse.body).toHaveLength(0);
    expect(getAllResponse.status).toBe(200);
  });

  it("should create user and update it", async () => {
    // crio um novo usuário
    await request(app).post("/").send(testUser);

    const testUserUpdated = {
      age: 21,
      id: "12345",
      isAlive: true,
      name: "Marceline",
    };

    // atualizo esse usuário criado
    const updateUserResponse = await request(app)
      .put(`/${testUser.id}`)
      .send(testUserUpdated);

    expect(updateUserResponse.status).toBe(200);

    expect(updateUserResponse.body).toStrictEqual(testUserUpdated);
  });
});
