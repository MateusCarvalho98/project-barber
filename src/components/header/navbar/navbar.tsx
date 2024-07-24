import React from 'react';
import styled from 'styled-components';

const Navbar = () => {

  const NavbarStyle = styled.nav `
    .navbar-menu {
      display: flex;
      gap: 15px;
    }
    .navbar-item {
      list-style: none;
    }
  `;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavbarStyle>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a className="navbar-link">Página Inicial</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link">Quem Somos</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link">Serviços</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link">Galeria</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link">Contato</a>
            </li>
          </ul>
        </NavbarStyle>
      </div>
    </nav>
  );
};

export default Navbar;