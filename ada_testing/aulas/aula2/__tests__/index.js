test('espero que os objetos sejam diferentes', () => {

    const dog = {
        name: 'billy',
        age: 10
    }

    const dog2 = {
        name: 'laica',
        age: 8
    }
    expect(dog.name).not.toEqual('laica')
})
