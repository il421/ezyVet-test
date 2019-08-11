import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App.js';

test('should render App without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
