import mockServer from '../mock/mock';
import SWAPI from './swapi';

describe('SWAPI', () => {

  beforeAll(() => {
    mockServer(); 
  });

  it('get planet count #unit-swapi-01', async () => {
    let swapi = new SWAPI(),
        count = await swapi.getPlanetCount();
    expect(count).toEqual(3);
  });

  it('get a planet #unit-swapi-02', async () => {
    let swapi = new SWAPI(),
        resp = await swapi.getPlanet('2');
    expect(resp.name).toEqual('Tatooine2');
  });
});
