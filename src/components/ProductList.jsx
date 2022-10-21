import { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-list.css';
import { fetchProducts } from "../actions/index";
import { connect } from "react-redux";

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  /* const [productsList, setProductList] = useState(products);

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
 */
  render() {

    const productItems = this.props.products.map((product) => (
        <div  className="product-item">
              <div className="overlay">
                <Link to={`/product/${product.id_product}`} className="product-thumb">
                  <img
                    src={`images/product${product.id_product}.png`}
                    alt="Imagem do produto"
                  />
                </Link>
                <span
                  className="discount"
                  style={!product.product_percent ? { display: 'none' } : undefined}
                >{`-${product.product_percent}%`}</span>
              </div>
              <div className="product-info">
                <span>{product.category_name}</span>
                <div className="product-stars">
                  {[...Array(product.product_rating)].map(() => (
                    <i className="bx bxs-star"></i>
                  ))}
                </div>
                <a href="/">{product.product_name}</a>
                <h4>
                  {' '}
                  {product.product_price.toLocaleString('pt-br', {
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
                    onClick={() => this.props.addToCart(product)}
                  ></i>
                </li>
              </ul>
        </div>
    ))


  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>Todos os Produtos</h1>
        <form className="form">
          <select id="selectBox" /* onChange={handleOrderList} */>
            <option value="1">Default Sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Sale</option>
            <option value="4">Sort By Rating</option>
          </select>
          <span className="form span">
            <i className="bx bx-chevron-down"></i>
          </span>
        </form>
      </div>
      <div className='product-center'>{productItems}</div>
    </section>
  )};
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect( mapStateToProps, { fetchProducts })(ProductList);
