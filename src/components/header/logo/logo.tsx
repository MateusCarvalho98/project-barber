import React from 'react';
import { IoIosCut } from "react-icons/io";
import styled from 'styled-components';

const Logo = () => {
  const LogoStyle = styled.nav `
    .header-logo {
      display: flex;
      gap: 10px;
    }
  `;
  return (
    <div className="logo">
      <LogoStyle>
        <a  className="header-logo">
          <IoIosCut />
          Barbearia
        </a>
      </LogoStyle>
    </div>
    );
  };
  
  export default Logo;

