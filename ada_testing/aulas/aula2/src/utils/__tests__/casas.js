import { houseForSale, desiredHouse} from '../casas.js'

test('the house has my desired features', () => {
    expect(houseForSale).toMatchObject(desiredHouse);
});