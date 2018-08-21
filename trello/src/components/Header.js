import React from "react";
import logo from '../assets/trello-logo-white.png'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #026aa7;
  padding: 4px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 21px;
    opacity: .5;
  }
`

const Header = () => (
  <HeaderWrapper>
    <img src={logo} />
  </HeaderWrapper>
)

export default Header;