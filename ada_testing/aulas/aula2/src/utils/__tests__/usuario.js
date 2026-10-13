import { expect, test } from "@jest/globals";

import { user } from "../usuario.js";

test("testando a renata", () => {
  // expect(user.name).not.toBe("Renat")
  // expect(user.name).toBe("Renata")

  expect(user).toEqual({
    address: {
      number: 197,
      street: "rua dos avestruzes",
    },
    age: 32,
    isAlive: true,
    name: "Renata",
    secondProfession: "SRE",
  });
});
