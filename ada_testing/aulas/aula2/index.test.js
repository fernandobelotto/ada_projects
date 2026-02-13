
test('espero que string vazia seja falsy', () => {

    const dog = {
        name: '',
        age: 10,
    }
    expect(dog.name).toBeFalsy()
})