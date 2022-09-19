import { useEffect } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import {
  changeOrderWithCart,
  changeQuantityAC,
  removeItemAC,
} from '../actions';

import { useDispatch, useSelector } from 'react-redux';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(changeOrderWithCart(cartItems));
  }, [cartItems]);

  const changeQuantity = (quantity, item) => {
    dispatch(changeQuantityAC({ ...item, quantity: quantity }));
  };

  const removeItem = (item) => {
    dispatch(removeItemAC(item));
  };
  return (
    <>
      <NavBar cartCount={cartItems.length}></NavBar>
      <Cart
        items={cartItems}
        order={order}
        changeQuantity={changeQuantity}
        removeItem={removeItem}
      ></Cart>
      <Footer></Footer>
    </>
  );
};

export default CartPage;
