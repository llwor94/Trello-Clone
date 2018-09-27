import React from 'react';
import logo from '../assets/trello-logo-white.png';
import icon from '../assets/trello-icon.png';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';

const HeaderWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  background: ${props => (props.transparent ? 'rgba(0,0,0,.15)' : '#026aa7')};
  padding: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Logout = styled.div`
  height: 32px;
  width: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper transparent={this.props.transparent}>
        {this.props.loggedIn && (
          <BoardLink to="/boards">
            <img src={icon} />
            <p>Boards</p>
          </BoardLink>
        )}

        <Logo src={logo} />
        {this.props.loggedIn && (
          <Logout
            onClick={() => {
              localStorage.removeItem('token');
              this.props.logout();
            }}
          >
            LW
          </Logout>
        )}
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.loggedIn,
});

export default connect(
  mapStateToProps,
  { logout },
)(Header);
