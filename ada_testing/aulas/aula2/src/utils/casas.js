export const casaParaVenda = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };
  export const casaDosSonhos = {
    bath: true,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      wallColor: expect.stringMatching(/white|yellow/),
    },
  };
