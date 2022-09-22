import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav-input.css';

const NavInput = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <h1>DevModas</h1>
      </Link>
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Pesquisar produtos" />
          <button type="submit">
            <i className="bx bx-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src="./images/user.png" alt="user" />
      </div>
    </div>
  );
};

export default NavInput;
