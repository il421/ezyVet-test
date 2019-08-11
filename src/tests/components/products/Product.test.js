import React from 'react';
import { shallow } from 'enzyme';
import Product from '../../../components/products/Product.js';
import { products, cart } from '../../fixtures/data';

let wrapper, addToCart;

beforeEach(() => {
  addToCart = jest.fn();

  wrapper = shallow(
    <Product
      { ...products[0] }
      addToCart={ addToCart }
    />
  );
});

test('should render Product without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call addToCart if click Add To Cart', () => {
  wrapper.find('.product__add').simulate('click')
  expect(addToCart).toHaveBeenLastCalledWith(cart[0]);
});
