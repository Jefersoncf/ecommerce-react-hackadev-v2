import '../styles/product-list.css';
const ProductList = ({ products, addToCart }) => {
  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>Todos os Produtos</h1>
        <form>
          <select>
            <option value="1">Defualt Sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Popularity</option>
            <option value="4">Sort By Sale</option>
            <option value="5">Sort By Rating</option>
          </select>
          <span>
            <i className="bx bx-chevron-down"></i>
          </span>
        </form>
      </div>
      <div className="product-center container">
        {products.map((product) => (
          <div className="product-item">
            <div className="overlay">
              <a href="/" className="product-thumb">
                <img
                  src={`images/${product.image}.png`}
                  alt="Imagem do produto"
                />
              </a>
              <span className="discount">40%</span>
            </div>
            <div className="product-info">
              <div className="product-stars">
                <i className="bx bx-star"></i>
                <span>{product.category}</span>
              </div>
              <a href="/">{product.name}</a>
              <h4>R$ {product.price}</h4>
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
