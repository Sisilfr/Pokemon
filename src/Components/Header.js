import React from 'react';
import logo from './Header.png';
import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Pokemon Logo" className="logo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </header>
    );
  };
  
  export default Header;
  