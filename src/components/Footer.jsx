import '../styles/footer'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="row">
            <div className="col">
                <h4>INFORMAÇÃO</h4>
                <a>Sobre</a>
                <a>Contato</a>
                <a>Termos & Condições</a>
                <a>Tipos de envio</a>
            </div>
            <div className="col">
                <h4>LINKS ÚTEIS</h4>
                <a>Loja online</a>
                <a>Atendimento ao cliente</a>
                <a>Promoções</a>
                <a>Marcas</a>
            </div>
            <div className="col">
                <h4>COMUNIDADES</h4>
                <a>Desenvolvedores</a>
                <a>Investidores</a>
                <a> Fornecedores</a>
            </div>
            <div className="social-net">
                <i className="bx bxl-facebook-circle bx-md"></i>
                <i className="bx bxl-twitter bx-md"></i>
                <i className="bx bxl-instagram bx-md"></i>
            </div>
            </div>
        </footer>
    )
}

export default Footer;