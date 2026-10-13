const { expect, test } = require("@jest/globals");

test("espero que os objetos sejam diferentes", () => {
  const dog = {
    age: 10,
    name: "billy",
  };

  const dog2 = {
    age: 8,
    name: "laica",
  };
  expect(dog.name).not.toBe("laica");
});
