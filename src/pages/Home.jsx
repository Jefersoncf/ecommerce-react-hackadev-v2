import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { ADD_TO_CART } from '../actions';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.items);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };
  return (
    <>
      <NavBar cartCount={cartItems.length}></NavBar>
      <ProductList products={products} addToCart={addToCart}></ProductList>
      <Footer></Footer>
    </>
  );
};

export default Home;
