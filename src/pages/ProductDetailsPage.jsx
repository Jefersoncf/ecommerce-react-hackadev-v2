import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { addToCartAC } from '../actions';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  let { productId } = useParams();
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.products);
  const product = products.find((p) => p._id === productId);
  console.log(productId, products, product);

  const addToCart = (product) => {
    dispatch(addToCartAC(product));
  };

  return (
    <>
      <Navbar cartCount={cartItems.length}></Navbar>
      <ProductDetails product={product} addToCart={addToCart}></ProductDetails>

      <Footer></Footer>
    </>
  );
};
export default ProductDetailsPage;
