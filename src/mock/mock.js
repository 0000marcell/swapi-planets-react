import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import planetData from '../mock/planet';
import planetsData from '../mock/planets';

const baseURL = 'https://swapi.co/api';

export default () => {
  let mock = new MockAdapter(axios),
      url = `${baseURL}/planets/1`

  mock.onGet(url).reply(200, planetData[0]);

  url = `${baseURL}/planets/2`
  mock.onGet(url).reply(200, planetData[1]);

  url = `${baseURL}/planets/3`
  mock.onGet(url).reply(200, planetData[2]);


  url = `${baseURL}/planets`
  mock.onGet(url).reply(200, planetsData);
}
