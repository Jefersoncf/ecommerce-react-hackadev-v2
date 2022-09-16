import { useEffect } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import { CHANGE_ORDER_CART, CHANGE_QUANTITY } from '../actions';

import { useDispatch, useSelector } from 'react-redux';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch({ type: CHANGE_ORDER_CART, payload: cartItems });
  }, [cartItems]);

  const changeQuantity = (quantity, item) => {
    dispatch({
      type: CHANGE_QUANTITY,
      payload: { ...item, quantity: quantity },
    });
  };
  return (
    <>
      <NavBar cartCount={cartItems.length}></NavBar>
      <Cart items={cartItems} order={order} 
      changeQuantity={changeQuantity}></Cart>
      <Footer></Footer>
      
    </>
  );
};

export default CartPage;
