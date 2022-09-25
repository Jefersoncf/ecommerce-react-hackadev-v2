import { useSelector } from 'react-redux';
import NavInput from '../components/NavInput';
import Footer from '../components/Footer';
import Orders from '../components/Orders';

const OrdersPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  return (
    <>
      <NavInput cartCount={cartItems.length}></NavInput>
      {/* <h2>Meus Pedidos</h2> */}
      {user.orders.map((order) => (
        <Orders items={order.items} order={order}></Orders>
      ))}

      <Footer></Footer>
    </>
  );
};
export default OrdersPage;
