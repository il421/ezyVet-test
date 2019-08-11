import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../../../components/cart/Checkout.js';

let wrapper, handleDisplayCheckoutModal;

beforeEach(() => {
  handleDisplayCheckoutModal = jest.fn();

  wrapper = shallow(
    <Checkout
      handleDisplayCheckoutModal={ handleDisplayCheckoutModal }
    />
  );
});

test('should render Checkout without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call handleDisplayCheckoutModal if click checkout close btn', () => {
  wrapper.find('.checkout__close').simulate('click');
  expect(handleDisplayCheckoutModal).toHaveBeenCalled();
});
