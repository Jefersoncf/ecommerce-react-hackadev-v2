import '../styles/cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ items, order, changeQuantity, removeItem }) => {
  return (
    <div className="container cart">
      <h3>
        {!items.length ? (
          <div className="cardempty">
            <img src="/images/empty-cart.png" alt="" id="imgcardempty" />
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
            <tr key={item.id}>
              <td>
                <div className="cart-info">
                  <img
                    src={`images/${item.image}.png`}
                    alt="Imagem do produto"
                  />
                  <div>
                    <p>{item.name}</p>
                    <span>Preço: R$ {item.price.toFixed(2)}</span> <br />
                    {/* <p>Quantidade: {item.quantity}</p> */}
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
                  value={item.quantity}
                  onChange={(e) => changeQuantity(e.target.value, item)}
                />
              </td>
              <td>R$ {item.quantity * item.price.toFixed(2)}</td>
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
                <td>R$ {order.total_cost.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Desconto ({order.discount_in_percent}%)</td>
                <td>
                  R${' '}
                  {(
                    (order.total_cost * order.discount_in_percent) /
                    100
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>
                  R${' '}
                  {(
                    order.total_cost -
                    (order.total_cost * order.discount_in_percent) / 100
                  ).toFixed(2)}
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
