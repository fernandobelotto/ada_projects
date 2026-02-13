import { nome, qualquer  } from '../contador.js'

test("super simples", () => {
    expect(nome).toBe('fernando')
})

test('testando a função qualquer', () => {
    expect(qualquer()).toBe(2)
})
