import "../styles/cart.css";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

const Cart = ({ items, order, changeQuantity, removeItem }) => {
  // const [value, setValue] = useState(0);
  // useEffect(() => {
  //   if (value < 0) {
  //     setValue(0);
  //   }
  // }, [value]);

  return (
    <div className="container cart">
      <h3>
        {!items.length ? (
          <div className="cardempty">
            <img src="/images/empty-cart.png" alt="produto" id="imgcardempty" />
          </div>
        ) : null}
      </h3>

      <table>
        <tbody>
          {order.items.length ? (
            <tr>
              <th>Produtos</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
            </tr>
          ) : null}

          {items.map((item) => (
            <tr key={item.id_product}>
              <td>
                <div className="cart-info">
                  <img
                    src={`images/product${item.id_product}.png`}
                    alt="Imagem do produto"
                  />
                  <div>
                    <p>{item.product_name}</p>
                    <span>
                      Preço:{" "}
                      {item.product_price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>{" "}
                    <br />
                    <span
                      onClick={() => removeItem(item)}
                      className="btn-remove"
                    >
                      remover
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  value={
                    item.quantity < 1
                      ? item.quantity === removeItem(item)
                      : item.quantity
                  }
                />
              </td>
              <td>
                {(item.quantity * item.product_price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {order.items.length ? (
        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>
                  {order.total_cost.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
              <tr>
                <td>Desconto ({order.discount_in_percent}%)</td>
                <td>
                  {(
                    (order.total_cost * order.discount_in_percent) /
                    100
                  ).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>
                  {(
                    order.total_cost -
                    (order.total_cost * order.discount_in_percent) / 100
                  ).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/checkout" className="checkout btn">
            Finalizar compra
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
