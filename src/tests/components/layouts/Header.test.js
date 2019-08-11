import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/layouts/Header.js';

test('should render Header without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
