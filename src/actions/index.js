import { Link } from "react-router-dom";

export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_ORDER_CART = 'CHANGE_ORDER_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const SET_SHIP_ADDRESS = 'SET_SHIP_ADDRESS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INIT_PRODUCTS = 'INIT_PRODUCTS';

export const fetchProducts = () => (dispatch) => {
  fetch("https://api-ecommerce-hackadev.herokuapp.com/product_all")
    .then((res) => res.json())
    .catch((err) =>
      fetch("")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: INIT_PRODUCTS, payload: data });
      console.log(data)
    });
};

export const addToCartAC = (product) => {
  //action create
  return function (dispatch) {
    dispatch({ type: ADD_TO_CART, payload: product });
  };
};

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

export const addAddressAC = (address) => {
  return function (dispatch) {
    dispatch({ type: ADD_ADDRESS, payload: address });
  };
};

export const setShipAddressAC = (address) => {
  return function (dispatch) {
    dispatch({ type: SET_SHIP_ADDRESS, payload: address });
  };
};

export const placeOrderAC = (order) => {
  return function (dispatch) {
    dispatch({ type: PLACE_ORDER, payload: order });
    <Link to="/payment" className="payment btn" />
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
