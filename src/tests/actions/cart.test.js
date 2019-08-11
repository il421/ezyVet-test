import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { products, cart } from '../fixtures/data.js';
import {addToCart, removeItem, addItemToCart, removeAllItems, setItemQty} from '../../actions/cart.js';
const createMockStore = configureMockStore([thunk]);

test('should add product action object correctly', () => {
  const action = addToCart(products[0]);
  expect(action).toEqual({
    type: 'ADD_ITEM',
    item: products[0]
  });
});

test('should remove item action object correctly', () => {
  const id = 1;
  const action = removeItem(id);
  expect(action).toEqual({
    type: 'REMOVE_ITEM',
    id
  });
});

test('should remove all item action object correctly', () => {
  const id = 1;
  const action = removeAllItems(id);
  expect(action).toEqual({
    type: 'REMOVE_ALL_ITEMS',
  });
});

test('should set item qty action object correctly', () => {
  const id = 1;
  const qty = 2;
  const action = setItemQty({id, qty});
  expect(action).toEqual({
    type: 'SET_ITEM_QTY',
    id,
    qty
  });
});

test('should call set item qty action object if product is in cart already', () => {
  const store = createMockStore({cart});
  store.dispatch(addItemToCart(products[0])).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'SET_ITEM_QTY',
      id: products[0].id,
      qty: 2
    });
  });
});

test('should call add item action object if product is in cart already', () => {
  const store = createMockStore({cart});
  store.dispatch(addItemToCart(products[2])).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_ITEM',
      item: products[2],
    });
  });
});
