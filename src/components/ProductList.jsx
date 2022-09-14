import '../styles/productList'

const ProductList = () => {
    return(
        <section className="section all-products" id="products">
            <div className="top container">
                <h1>Todos os Produtos</h1>
                <form>
                <select>
                    <option value="1">Ordenar por</option>
                    <option value="2">Gênero</option>
                    <option value="3">Preço</option>
                    <option value="4">Marca</option>
                    <option value="5">Oferta</option>
                </select>
                <span><i className="bx bx-chevron-down"></i></span>
                </form>
            </div>
            <div className="product-center container">
                <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.html" className="product-thumb">
                    <img src="./src/img/product1.png" alt="" />
                    </a>
                    <span className="discount">-40%</span>
                </div>
                <div className="product-info">
                    <span>FEMININO</span>
                    <a href="productDetails.html">Vestido Floral Verde Marinho</a>
                    <p className="priceB4">R$ 250</p>
                    <h4>R$ 150</h4>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList;