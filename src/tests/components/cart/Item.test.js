import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../../components/cart/Item.js';
import { cart } from '../../fixtures/data';

let wrapper, removeItem, setItemQty;

beforeEach(() => {
  removeItem = jest.fn();
  setItemQty = jest.fn();

  wrapper = shallow(
    <Item
      { ...cart[0] }
      removeItem={ removeItem }
      setItemQty={ setItemQty }
    />
  );
});

test('should render Item without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call removeItem if click remove btn', () => {
  wrapper.find('.item__remove').simulate('click');
  expect(removeItem).toHaveBeenLastCalledWith(cart[0].id);
});

test('should call setItemQty if click increase/decrease btn', () => {
  wrapper.find('.qty-box__inc').simulate('click');
  expect(setItemQty).toHaveBeenLastCalledWith({ id: cart[0].id, qty: cart[0].qty + 1 });

  wrapper.find('.qty-box__dec').simulate('click');
  expect(setItemQty).toHaveBeenLastCalledWith({ id: cart[0].id, qty: cart[0].qty - 1 });
});

test('should call setItemQty if change qty in input box', () => {
  wrapper.find('.qty-box input').simulate('change', { target: { value: 2 } })
  expect(setItemQty).toHaveBeenLastCalledWith({ id: cart[0].id, qty: 2 });
});
