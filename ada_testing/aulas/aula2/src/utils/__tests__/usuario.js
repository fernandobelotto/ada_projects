import { user } from '../usuario.js'

test('testando a renata', () => {

    // expect(user.name).not.toBe("Renat")
    // expect(user.name).toBe("Renata")

    expect(user).toEqual({
        name: 'Renata',
        age: 32,
        isAlive: true,
        address: {
            street: 'rua dos avestruzes',
            number: 197
        },
        secondProfession: 'SRE'
    })

})