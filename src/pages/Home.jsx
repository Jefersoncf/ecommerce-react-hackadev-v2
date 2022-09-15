import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <>
      <NavBar></NavBar>
      <ProductList products={products}></ProductList>
      <Footer></Footer>
    </>
  );
};

export default Home;
