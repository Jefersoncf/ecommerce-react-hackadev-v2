import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Checkout from '../components/Checkout';

import {
  addAddressAC,
  setShipAddressAC,
  placeOrderAC,
  emptyCartAC,
} from '../actions';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  const addAddress = (address) => {
    dispatch(addAddressAC(address));
  };

  const setShipAddress = (address) => {
    dispatch(setShipAddressAC(address));
  };
  const placeOrder = () => {
    if (order.shipping_address) {
      dispatch(placeOrderAC(order));
      dispatch(emptyCartAC());
    } else {
      alert('Por favor adicione um endereço');
    }
  };

  return (
    <>
      <NavBar cartCount={cartItems.length}></NavBar>
      <Checkout
        user={user}
        addAddress={addAddress}
        setShipAddress={setShipAddress}
        placeOrder={placeOrder}
      ></Checkout>

      <Footer></Footer>
    </>
  );
};
export default CheckoutPage;
