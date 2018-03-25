import React from 'react'; 
import ReactDOM from 'react-dom'; 
import mockServer from '../../mock/mock';
import PlanetPage from './PlanetPage'; 
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('PlanetPage', () => {
  beforeAll(() => {
    mockServer(); 
  });

  it('set random planet #unit-planet-page-01', async () => { 
    const wrapper = shallow(<PlanetPage />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('planetData').name).toMatch(/Tatooine/);
    expect(wrapper.state('dataState')).toEqual('completed');
  });

});


