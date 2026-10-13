const { expect, test } = require("@jest/globals");

test("testando a schema", () => {
  const birthday = {
    day: 18,
    month: 10,
    outra: "true",
    year: 1988,
  };

  const schema = {
    day: expect.any(Number),
    month: expect.any(Number),
    outra: expect.any(String),
    year: expect.any(Number),
  };

  expect(birthday).toEqual(schema);
});
