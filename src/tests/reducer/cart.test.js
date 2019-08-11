import cartReducer from '../../reducers/cart.js';
import { products, cart } from '../fixtures/data.js';

const defaultState = {
  cart: [],
};

test('should setup default cart', () => {

  const state = cartReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});

test('should add a product correctly', () => {
  const action = {
    type: 'ADD_ITEM',
    item: products[0]
  };

  const state = cartReducer(defaultState, action);
  expect(state.cart[0]).toEqual(products[0]);
});

test('should remove the item correctly', () => {
  const id = 1;
  const action = {
    type: 'REMOVE_ITEM',
    id
  };

  const state = cartReducer({ cart }, action);
  expect(state.cart).toEqual([cart[1]]);
});

test('set item qty correctly', () => {
  const id = 1;
  const qty = 2;
  const action = {
    type: 'SET_ITEM_QTY',
    id,
    qty
  };

  const state = cartReducer({ cart }, action);
  expect(state.cart[0].qty).toBe(qty);
});

test('should remove all items', () => {

  const action = {
    type: 'REMOVE_ALL_ITEMS',
  };

  const state = cartReducer({ cart }, action);
  expect(state.cart).toEqual([]);
});
