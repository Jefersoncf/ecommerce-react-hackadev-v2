import React from 'react';
import '../styles/payment.css';

const PaymentPage = ( { order } ) => {

    const total =
    order.total_cost -
    ((order.total_cost * order.discount_in_percent) / 100) +
    order.shipping_charge;

    function setCardPayment (e) {
        const cardOptions = document.getElementById('card-payment')
        if (e.target.value === '3') {
            cardOptions.style.display = "block"
        }
        else {
            cardOptions.style.display = "none"
        }
        
    }

    return (
    <>
        <div className="container-payment">
            <div className="payment-content">
                <h3 className="title">Pagamento</h3>
                <div className='payment-options'>
                    <input type="radio" name='option' value='1' onClick={(e) => setCardPayment(e)}/>PIX
                    <input type="radio" name='option' value='2' onClick={(e) => setCardPayment(e)}/>BOLETO
                    <input type="radio" name='option' value='3' onClick={(e) => setCardPayment(e)}/>Cartão
                </div>
                <div id='card-payment'>
                    <div className="flex">
                        <p>Cartões aceitos:</p>
                        <img src="images/card_img.png" alt="" />
                        <p>Nome no cartão:</p>
                        <input type="text" placeholder="José da Silva" required/>
                        <p>N° do cartão:</p>
                        <input type="number" placeholder="9999 9999 9999 9999" required  />
                        <p>Mês venc.:</p>
                        <input type="number" placeholder="01" required/>
                        <p>Ano venc.:</p>
                        <input type="number" placeholder="2022" required/>
                        <p>CVV:</p>
                        <input type="text" placeholder="123" required/>
                    </div>
                </div>
            </div>

            <div className="sec-cart">
                <h3 className="title">Seu Carrinho</h3>
                <div className="content-cart">
                    <div className="box-cart">
                    <strong>Quantidade de Itens: {order.total_items}</strong>

                    <p>
                        Valor Bruto:{' '}
                        {order.total_cost.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                        })}
                    </p>

                    <p>
                        Taxas: {' R$ '}
                        {order.shipping_charge}
                    </p>

                    <p>
                        Descontos:{' '}
                        {(
                        (order.total_cost * order.discount_in_percent) /
                        100
                        ).toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                        })}
                    </p>

                    <strong>
                        Total:{' '}
                        {total.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                        })}
                    </strong>
                    </div>
                </div>
                {order.shipping_address ? (
                <div className="sec-adress">
                    <div className="address">
                      <p>{order.shipping_address.full_name}</p>
                      <p>
                        {order.shipping_address.address},{' '}
                        {order.shipping_address.number},{' '}
                        {order.shipping_address.pin_code},{' '}
                        {order.shipping_address.city},{' '}
                        {order.shipping_address.state}
                      </p>
                      <p>{order.shipping_address.phone}</p>
                    </div>
                </div>
                ) : null}
            </div>
        </div>
        <div className="flex">
            <div className="inputBox">
                <button className="submit-btn btn" type="submit">
                    Finalizar pedido
                </button>
            </div>
            <div className="inputBox">
                <button className="btn btn-outline" type="submit">
                    Cancelar
                </button>
            </div>
        </div>
    </>
    )
}

export default PaymentPage;