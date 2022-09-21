import '../styles/orders.css';

const Orders = ({ items, order }) => {
  const total_orders =
    order.total_cost -
    (order.total_cost * order.discount_in_percent) / 100 +
    order.shipping_charge;

  return (
    <>
      <h2 className="title">Meus Pedidos</h2>
      <div className="wrapper">
        <div className="project">
          <div className="shop">
            {items.map((item) => (
              <div className="box">
                <img src={`images/${item.image}.png`} alt="Imagem do produto" />
                <div className="content">
                  <h3>{item.name}</h3>
                  <h4>Preço: R$ {item.price.toFixed(2)}</h4>
                  <p className="unit">Quantidade: {item.quantity}</p>
                </div>
              </div>
            ))}
            <span>
              Total:
              {total_orders.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="show-address">
              Endereço: {order.shipping_address.full_name},{' '}
              {order.shipping_address.address}, {order.shipping_address.number},{' '}
              {order.shipping_address.pin_code}, {order.shipping_address.city},{' '}
              {order.shipping_address.state}
            </p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
