const { expect, test } = require("@jest/globals");

const listaDeCompras = ["carne", "alface", "chocolate", "cocada", "leite"];

test("a lista de compras contém o item leite", () => {
  expect(listaDeCompras).toContain("leite");
});
