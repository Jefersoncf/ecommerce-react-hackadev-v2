import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col d-flex">
          <h4>INFORMAÇÃO</h4>
          <Link to="/about">Sobre</Link>
          <Link to="/">Contato</Link>
          <Link to="/">T&C</Link>
          <Link to="/">Tipos de envio</Link>
        </div>
        <div className="col d-flex">
          <h4>LINKS ÚTEIS</h4>
          <Link to="/">Loja online</Link>
          <Link to="/">Atendimento ao cliente</Link>
          <Link to="/">Promoções</Link>
          <Link to="/">Marcas</Link>
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
