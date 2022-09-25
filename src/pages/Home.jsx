import NavBar from '../components/NavBar';
import Slider from '../components/Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { ADD_TO_CART } from '../actions';
import { useEffect, useState } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const [productList, setProductList] = useState(products);
  const [include, setInclude] = useState('');
  useEffect(() => {
    if (include) {
      const filter = products.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(include.toLocaleLowerCase())
          ||
          product.category
          .toLocaleLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(include.toLocaleLowerCase())
      );
      setProductList(filter);
    } else {
      setProductList(products);
    }
  }, [include, products]);
  return (
    <>
      <NavBar setInclude={setInclude}></NavBar>
      <Slider />
      <ProductList products={productList} addToCart={addToCart}></ProductList>

      <Footer></Footer>
    </>
  );
};

export default Home;
