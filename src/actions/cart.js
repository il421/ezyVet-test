export const addToCart = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
};

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id
});

export const setItemQty = ({id, qty}) => {
  let value = qty;
  if (Number(qty) <= 0) {
    value = 0;
  }
  return {
    type: 'SET_ITEM_QTY',
    id,
    qty: value
  };
};

export const removeAllItems = () => ({
  type: 'REMOVE_ALL_ITEMS'
});

export const addItemToCart = (item) => {
  return async (dispatch, getState) => {
    const cart = getState().cart;
    const cartItem = cart.find((i) => i.id === item.id);

    if(typeof cartItem !== 'undefined') {
      dispatch(setItemQty({id: item.id, qty: cartItem.qty + 1}));
    } else {
      dispatch(addToCart(item));
    }
  };
};
