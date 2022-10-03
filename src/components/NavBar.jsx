import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import NavInput from './NavInput';
import { useSelector } from 'react-redux';

const NavBar = ({ setInclude }) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <header>
      <NavInput cartCount={cartItems.length} setInclude={setInclude} />
      <div className="navigation">
        <div className="nav-center container d-flex">
          <ul className="nav-list d-flex">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Termos
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/myorders" className="nav-link">
                Pedidos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
