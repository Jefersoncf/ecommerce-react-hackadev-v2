import React from "react";
import { Link } from "react-router-dom";
import "../styles/product-list.css";
import { useSelector } from "react-redux";
// import { addToCart } from "../actions";

const ProductRelated = () => {
  // const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  console.log(products);
  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>Produtos Relacionados</h1>
      </div>

      <div className="product-center">
        {products
          .filter((p) => p.category_name === "ROUPAS")
          .slice(0, 5)

          .map((product) => {
            return (
              <div className="product-item">
                <div className="overlay">
                  <Link
                    to={`/product/${product.id_product}`}
                    className="product-thumb"
                  >
                    <img
                      src={`/images/product${product.id_product}.png`}
                      alt="Imagem do produto"
                    />
                  </Link>
                  <span
                    className="discount"
                    style={
                      !product.product_percent ? { display: "none" } : undefined
                    }
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
                    {" "}
                    {product.product_price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
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
                      // onClick={() => addToCart(product)}
                    ></i>
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default ProductRelated;
