import React from 'react';
import Redessociais from "./redessociais/redessociais";
import Navbar from "./navbar/navbar";
import Logo from './logo/logo';
import styled from 'styled-components';

const Header = () => {
  const NavbarStyle = styled.nav `
  .header-container {
    background-color: black;
    opacity: 0.7;
    padding: 10px;
  }
  .header-components {  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    color: white;
    font-weight: bold;
  }
  `;

    return (
      <header>
        <NavbarStyle>
          <div className="header-container">
            <div className="header-components">
              <Logo />
              <Navbar />
              <Redessociais />
            </div>
          </div>
        </NavbarStyle>
      </header>
    );
  };
  
export default Header;