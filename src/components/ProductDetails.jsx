import { Link } from 'react-router-dom';
import '../styles/product-details.css';

const ProductDetails = ({ product, addToCart }) => {
  return (
    <section className="section product-detail">
      <div className="details container-b">
        <div className="left image-container">
          <div className="main">
            <img src={`/images/${product.image}.png`} alt="Imagem do produto" />
          </div>
        </div>
        <div className="right">
          <span>{product.category}</span>
          <h1>{product.name}</h1>
          <p className="rating">Avaliações: {product.rating}</p>
          <div className="price">
            <p>Preço: {product.price}</p>
          </div>
          <form>
            <div>
              <select>
                <option value="Select Size">Selecione o tamanho</option>
                <option value={product.size === 'S'} checked>
                  32
                </option>
                <option value={product.size === 'M'}>42</option>
                <option value={product.size === 'G'}>52</option>
                <option value={product.size === 'XG'}>62</option>
              </select>
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </div>
          </form>
          <form className="form">
            <input type="number" value="1" />
            <Link to="/cart" className="addCart" onClick={addToCart(product)}>
              Adicionar ao Carrinho
            </Link>
          </form>
          <h3>Detalhes do produto</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
            delectus nulla voluptates nesciunt quidem laudantium, quisquam
            voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;