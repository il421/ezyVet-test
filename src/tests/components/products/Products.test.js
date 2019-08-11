import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../../../components/products/Products.js';

test('should render Products without crashing', () => {
  const wrapper = shallow(<Products />);
  expect(wrapper).toMatchSnapshot();
});
