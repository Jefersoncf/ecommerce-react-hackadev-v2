import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import NavInput from './NavInput';

const NavBar = ({ cartCount }) => {
  return (
    <header>
      <NavInput />
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
              <a href="/" className="nav-link">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <Link to="/myorders" className="nav-link">
                Pedidos
              </Link>
            </li>
          </ul>

          <div className="icons d-flex">
            <a href="login.html" className="icon">
              <i className="bx bx-user"></i>
            </a>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <Link to="/cart" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex"> {cartCount}</span>
            </Link>
          </div>

          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
