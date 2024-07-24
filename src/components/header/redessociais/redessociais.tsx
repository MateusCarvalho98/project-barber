import React from 'react';
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styled from 'styled-components';

const Redessociais = () => {

    const SocialmediaStyle = styled.nav `
      .social-media-list {
        display: flex;
        gap: 20px;
      }
      .social-media-item {
        list-style: none;
      }
      a {
        color: white;
      }
    `;

    return (
        <div>
        {/* Redes Sociais */}
            <SocialmediaStyle>
              <ul className="social-media-list">
                  <li className="social-media-item">
                      <a href="https://www.instagram.com/" className="social-media-link">
                          <FaInstagram />
                      </a>
                  </li>
                  <li className="social-media-item">
                      <a href="https://www.facebook.com/" className="social-media-link">
                          <FaFacebook />
                      </a>
                  </li>
                  <li className="social-media-item">
                      <a href="https://twitter.com/" className="social-media-link">
                          <FaXTwitter />
                      </a>
                  </li>
              </ul>
            </SocialmediaStyle>
        </div>
    )
};

export default Redessociais;