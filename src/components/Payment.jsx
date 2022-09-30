const PaymentPage = () => {
    return (
        <div className="container-payment">
            <h3 className="title">Pagamento</h3>
            <div className="inputBox">
                <p>Cartões aceitos :</p>
                <img src="images/card_img.png" alt="" />
            </div>
            <div className="inputBox">
                <p>Nome no Cartão :</p>
                <input type="text" placeholder="José da Silva" />
            </div>
            <div className="flex">
                <div className="inputBox">
                    <p>N° do cartão :</p>
                    <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div className="inputBox">
                    <p>Mês exp. :</p>
                    <input type="text" placeholder="janeiro" />
                </div>
            </div>
            <div className="flex">
                <div className="inputBox">
                    <p>Ano exp. :</p>
                    <input type="number" placeholder="2022" />
                </div>
                <div className="inputBox">
                    <p>CVV :</p>
                    <input type="text" placeholder="123" />
                </div>
            </div>
            <div className="flex">
                <div className="inputBox">
                    <button className="submit-btn btn" type="submit">
                        Adicionar
                    </button>
                </div>
                <div className="inputBox">
                    <button className="btn btn-outline" type="submit">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage;