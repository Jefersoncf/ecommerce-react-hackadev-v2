export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_ORDER_CART = 'CHANGE_ORDER_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const changeOrderWithCart = (cartItems) => {
  return function (dispatch) {
    dispatch({ type: CHANGE_ORDER_CART, payload: cartItems });
  };
};

export const changeQuantityAC = (item) => {
  return function (dispatch) {
    dispatch({ type: CHANGE_QUANTITY, payload: item });
  };
};

export const emptyCartAC = () => {
  return function (dispatch) {
    dispatch({ type: EMPTY_CART });
  };
};

export const removeItemAC = (item) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_ITEM, payload: item });
  };
};
