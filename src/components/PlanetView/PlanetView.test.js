import React from 'react'; 
import ReactDOM from 'react-dom'; 
import PlanetView from './PlanetView'; 
import planetData from '../../mock/planet';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('PlanetView', () => {
  it('show all data #unit-planet-view-01', () => { 
    expect.assertions(6);
    let $nextButton = '[data-test-next-button]',
        $name = '[data-test-name]',
        $population = '[data-test-population]',
        $climate = '[data-test-climate]',
        $terrain = '[data-test-terrain]',
        $films = '[data-test-films]';

    const nextPlanet = sinon.spy(),
          dataState = 'completed';

    const wrapper = shallow(<PlanetView data={planetData[0]} 
          dataState={dataState}
          nextPlanet={nextPlanet}/>);

    wrapper.find($nextButton).simulate('click');

    expect(nextPlanet.calledOnce).toEqual(true);

    expect(wrapper.find($name).text())
      .toMatch(new RegExp(planetData[0].name));

    expect(wrapper.find($population).text())
      .toMatch(new RegExp(planetData[0].population));

    expect(wrapper.find($climate).text())
      .toMatch(new RegExp(planetData[0].climate));

    expect(wrapper.find($terrain).text())
      .toMatch(new RegExp(planetData[0].terrain));

    expect(wrapper.find($films).text())
      .toMatch(new RegExp(`${planetData[0].films.length}`));
  });

  it('show loading state #unit-planet-view-02', () => { 
    expect.assertions(1);
    let $loading = '[data-test-loading]';
        
    const dataState = 'pending';

    const wrapper = shallow(<PlanetView data={planetData[0]} 
          dataState={dataState} />);

    expect(wrapper.find($loading).text())
      .toEqual('loading...');
  });
});
