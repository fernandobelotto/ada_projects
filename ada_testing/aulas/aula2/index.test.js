const { expect, test } = require("@jest/globals");

test("espero que string vazia seja falsy", () => {
  const dog = {
    age: 10,
    name: "",
  };
  expect(dog.name).toBeFalsy();
});
