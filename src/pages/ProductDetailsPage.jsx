import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { ADD_TO_CART, CHANGE_QUANTITY } from '../actions';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const productSelected = []
  let { productId } = useParams();
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.products);
  const productFound = [...productSelected, products.find((p) => p.id_product === parseInt(productId))];
  const product = productFound[0]

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <>
      <Navbar cartCount={cartItems.length}></Navbar>
      <ProductDetails product={product} addToCart={addToCart} ></ProductDetails>

      <Footer></Footer>
    </>
  );
};
export default ProductDetailsPage;
