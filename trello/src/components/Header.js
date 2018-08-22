import React from "react";
import logo from '../assets/trello-logo-white.png';
import icon from '../assets/trello-icon.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background: #026aa7;
  padding: 4px;
  height: 40px;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  position: absolute;
  left: 47%;
  height: 21px;
  opacity: .5;
`
const BoardLink = styled(Link) `
  opacity: .5px;
  background: hsla(0,0%,100%,.3);
  border-radius: 3px;
  display: flex;
  padding: 4px 8px;
  vertical-align: center;
  img {
    height: 18px;
    padding-right: 10px;
  };
  p {
    color: #fff;
    font-weight: bold;
    padding-top: 1px;
  }
`

const Header = () => (
  <HeaderWrapper>
    <BoardLink to="/">
      <img src={icon} />
      <p>Boards</p>
    </BoardLink>

    <Logo src={logo} />
  </HeaderWrapper>
)

export default Header;