import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-group">
      <div className="logo">
        <h1>Shortly</h1>
      </div>
      <ul className="product-links">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul className="product-login-registration">
        <li><button>Login</button></li>
        <li><button>Sign Up</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;