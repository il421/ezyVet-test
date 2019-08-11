import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '../../../components/cart/Cart.js';
import { cart } from '../../fixtures/data';

let wrapper, removeItem, setItemQty, removeAllItems;

beforeEach(() => {
  removeItem = jest.fn();
  setItemQty = jest.fn();
  removeAllItems = jest.fn();
  wrapper = shallow(
    <Cart
      cart={ cart }
      removeItem={ removeItem }
      setItemQty={ setItemQty }
      removeAllItems={removeAllItems}
    />
  );
});

test('should render Cart without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call removeAllItems if click clear all btn', () => {
  wrapper.find('.actions__trash').simulate('click');
  expect(removeAllItems).toHaveBeenCalled();
});

