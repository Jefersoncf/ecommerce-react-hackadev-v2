import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/nav-input.css';

const NavInput = ({ cartCount, setInclude }) => {
  const route = useLocation();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (!inputText) {
      if (setInclude) {
        setInclude(inputText);
      }
    }
  }, [inputText, setInclude]);

  function handleClick() {
    setInclude(inputText);
  }

  return (
    <div className="header">
      <Link to="/" className="logo">
        <h1>DevModas</h1>
      </Link>
      <div
        className="search-bar"
        style={route.pathname === '/' ? { display: 'flex' } : undefined}
      >
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          placeholder="Pesquisar produtos"
        />
        <button type="submit" onClick={() => handleClick()}>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <div className="icons d-flex">
        <div className="icon">
          <i className="bx bx-heart"></i>
          <span className="d-flex">0</span>
        </div>
        <Link to="/cart" className="icon">
          <i className="bx bx-cart"></i>
          <span className="d-flex">{cartCount}</span>
        </Link>
        <div className="user-image">
          <Link to="/login" class="icon">
            <i className="bx bx-user"></i>
          </Link>
        </div>
      </div>
      <div className="hamburger">
        <i className="bx bx-menu-alt-left"></i>
      </div>
    </div>
  );
};

export default NavInput;
