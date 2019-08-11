import React from 'react';
import { shallow } from 'enzyme';
import Totals from '../../../components/cart/Totals.js';
import { cart } from '../../fixtures/data';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Totals
      cart={ cart }
    />
  );
});

test('should render Totals without crashing with correct totals value', () => {
  const totals = 'Totals: $316.25';
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.totals div').text()).toBe(totals);
});
