import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col d-flex">
          <h4>INFORMAÇÃO</h4>
          <a href="/">Sobre</a>
          <a href="/">Contato</a>
          <a href="/">`T&C`</a>
          <a href="/">Tipos de envio</a>
        </div>
        <div className="col d-flex">
          <h4>LINKS ÚTEIS</h4>
          <a href="/">Loja online</a>
          <a href="/">Atendimento ao cliente</a>
          <a href="/">Promoções</a>
          <a href="/">Marcas</a>
        </div>
        <div className="col d-flex">
          <span>
            <i className="bx bxl-facebook-square"></i>
          </span>
          <span>
            <i className="bx bxl-instagram-alt"></i>
          </span>
          <span>
            <i className="bx bxl-github"></i>
          </span>
          <span>
            <i className="bx bxl-twitter"></i>
          </span>
          <span>
            <i className="bx bxl-pinterest"></i>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
