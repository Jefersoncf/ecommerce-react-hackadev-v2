import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/nav-input.css';

const NavInput = ({ setInclude }) => {
  const route = useLocation();
  const [inputText, setInputText] = useState('');
  console.log(route);

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
      <div className="user-image">
        <img src="./images/user.png" alt="user" />
      </div>
    </div>
  );
};

export default NavInput;
