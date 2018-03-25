import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mockServer from './mock/mock';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', async () => {
    const wrapper = shallow(<App />);
  });
});


