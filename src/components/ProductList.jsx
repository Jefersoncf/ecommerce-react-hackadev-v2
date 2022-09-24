import { useState } from 'react';
import '../styles/product-list.css';
const ProductList = ({ products, addToCart }) => {
  const [productsList, setProductList] = useState(products);

  const handleOrderList = () => {
    let newProducts = [...products];

    let selectOption = document.getElementById('selectBox');
    let selectedValue = selectOption.options[selectOption.selectedIndex].value;

    if (selectedValue === '2') {
      newProducts.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else {
          if (a.price < b.price) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    } else if (selectedValue === '3') {
      newProducts.sort((a, b) => {
        if (a.percent < b.percent) {
          return 1;
        } else {
          if (a.percent > b.percent) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    } else if (selectedValue === '4') {
      newProducts.sort((a, b) => {
        if (a.rating < b.rating) {
          return 1;
        } else {
          if (a.rating > b.rating) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    }

    setProductList(newProducts);
  };

  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>Todos os Produtos</h1>
        <form className='form'>
          <select id="selectBox" onChange={handleOrderList}>
            <option value="1">Default Sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Sale</option>
            <option value="4">Sort By Rating</option>
          </select>
          <span className='form span'>
            <i className="bx bx-chevron-down"></i>
          </span>
        </form>
      </div>
      <div className="product-center container">
        {productsList.map((product) => (
          <div key={product.id} className="product-item">
            <div className="overlay">
              <a href="/" className="product-thumb">
                <img
                  src={`images/${product.image}.png`}
                  alt="Imagem do produto"
                />
              </a>
              <span
                className="discount"
                style={!product.percent ? { display: 'none' } : undefined}
              >{`-${product.percent}%`}</span>
            </div>
            <div className="product-info">
              <span>{product.category}</span>
              <div className="product-stars">
                {[...Array(4)].map(() => (
                  <i className="bx bxs-star"></i>
                ))}
                <i className="bx bxs-star-half"></i>
              </div>
              <a href="/">{product.name}</a>
              <h4>
                {' '}
                {product.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h4>
            </div>
            <ul className="icons">
              <li>
                <i className="bx bx-heart"></i>
              </li>
              <li>
                <i className="bx bx-search"></i>
              </li>
              <li>
                <i
                  className="bx bx-cart"
                  onClick={() => addToCart(product)}
                ></i>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
