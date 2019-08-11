const cartDefaultState = {
  cart: []
};

export default (state = cartDefaultState, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    return {
      ...state,
      cart: [action.item, ...state.cart]
    };

  case 'REMOVE_ITEM':
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.id)
    };

  case 'SET_ITEM_QTY':
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            qty: Number(action.qty)
          };
        } else {
          return item;
        }
      })
    };

  case 'REMOVE_ALL_ITEMS':
    return {
      ...state,
      cart: []
    };

  default:
    return state;
  }
};
