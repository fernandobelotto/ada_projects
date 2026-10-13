import { beforeAll, expect, jest, test } from "@jest/globals";

import { getUsers } from "../controllers/user.controller";
import { users } from "../controllers/user.controller.js";
import { runServer } from "../index.js";

beforeAll(() => {
  runServer();
});

test("should send array of users", async () => {
  const req = {};
  const res = { json: jest.fn() };
  await getUsers(req, res);
  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).not.toHaveBeenCalledTimes(2);
  expect(res.json).toHaveBeenCalledWith(users);
});
