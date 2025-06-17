import React from 'react';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">PyRec</div>
    <div className="navbar-links">
      <a href="/" className="navbar-link">Home</a>
      <a href="/tokens" className="navbar-link">Tokens</a>
      <a href="/guidelines" className="navbar-link">Guidelines</a>
    </div>
  </nav>
);

export default Navbar; 