import "../styles/cart.css";
import { Link } from "react-router-dom";

const Cart = ({ items, order, changeQuantity }) => {
  return (
    <div className="container cart">
      <table>
        <tr>
          <th> Produtos </th>
          <th> Quantidade </th>
          <th> Subtotal </th>
        </tr>

        {items.map((item) => {
          <tr>
            <td>
              <div className="cart-info">
                <img src={`images/${item.image}.png`} alt="Imagem do produto" />

                <div>
                  <p> {item.name}</p>
                  <span> Preço: R$ {item.price} </span> <br />
                  <a href="#">remover</a>
                </div>
              </div>
            </td>

            <td>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => changeQuantity(e.target.value, item)}
              />
            </td>
            <td> R$ {item.price.toFixed(2)}</td>
          </tr>;
        })}
      </table>

      <div className="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>R$ {order.total_cost.toFixed(2)} </td>
          </tr>
          <tr>
            <td>Desconto ({order.discount_in_percent}%)</td>
            <td>
              R${" "}
              {((order.total_cost * order.discount_in_percent) / 100).toFixed(2)}{" "}
            </td>
          </tr>

          <tr>
            <td id="palavratotal">Total</td>
            <td>
              R${" "}
              {(
                order.total_cost -
                (order.total_cost * order.discount_in_percent) / 100
              ).toFixed(2)}
            </td>
          </tr>
        </table>
        <Link to='/' className="checkout btn">
          Finalizar pedido
        </Link>
      </div>
    </div>
  );
};

export default Cart