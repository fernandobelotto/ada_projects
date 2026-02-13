test('testando a schema', () => {

    const birthday = {
      day: 18,
      month: 10,
      year: 1988,
      outra: 'true',
    }

    const schema = {
      day: expect.any(Number),
      month: expect.any(Number),
      year: expect.any(Number),
      outra: expect.any(String),
    }

    expect(birthday).toEqual(schema)
  })