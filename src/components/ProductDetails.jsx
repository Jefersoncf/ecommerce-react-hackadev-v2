import { Link } from 'react-router-dom';
import '../styles/product-details.css';

const ProductDetails = ({ product, addToCart }) => {
  return (
    <section className="section product-detail">
      <div className="details container-b">
        <div className="left image-container">
          <div className="main">
            <img src={`/images/product${product.id_product}.png`} alt="Imagem do produto" />
          </div>
        </div>
        <div className="right">
          <span>{product.category_name}</span>
          <h1>{product.product_name}</h1>
          <p className="rating">Avaliações: {[...Array(product.product_rating)].map(() => (
                                                      <i className="bx bxs-star"></i>
                                            ))}
          </p>
          <div className="price">
            <p>Preço: {product.product_price.toLocaleString('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL',
                      })}
            </p>
          </div>
          <form>
            {product.product_size
            ?
            <div>
                {[...Array(product.product_size.length)].map(() => (
                    <div>{product.size_name}</div>
                ))}
            </div>
            : 
            <div></div>
            }
            
          </form>
          <form className="form">
            <input type="number" value="1"/>
            <button type="button" className="addCart" onClick={() => addToCart(product)}>
              Comprar
            </button>
            <Link to="/cart" className="addCart">
              Ver Carrinho
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
