import React from "react";
import logo from "../assets/trello-logo-white.png";
import icon from "../assets/trello-icon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  background: ${props => props.transparent ? 'rgba(0,0,0,.15)' : '#026aa7'};
  padding: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 100;
`;
const Logo = styled.img`
  position: absolute;
  left: 47%;
  height: 21px;
  opacity: 0.5;
`;
const BoardLink = styled(Link)`
  opacity: 0.5px;
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 3px;
  display: flex;
  padding: 7px 8px;
  vertical-align: center;
  img {
    height: 18px;
    padding-right: 10px;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding-top: 1px;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper transparent={this.props.transparent}>
        <BoardLink to="/">
          <img src={icon} />
          <p>Boards</p>
        </BoardLink>

        <Logo src={logo} />
      </HeaderWrapper>
    );
  }
}

export default Header;
