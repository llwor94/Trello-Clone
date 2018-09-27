import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, login } from '../actions/authActions';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  background: #026aa7;
  height: 100%;
  h1 {
    font-size: 35px;
    color: white;
    margin: 25px;
  }
  p {
    font-size: 20px;
    color: #52a7d6;
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  width: 100%;
  border-radius: 4px;

  margin-bottom: 20px;
`;
const Label = styled.label`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Button = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  border: 1px solid #5aac44;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  font-weight: bold;
  outline: none;
  width: 50%;
`;

class AuthContainer extends Component {
  state = {
    username: '',
    password: '',
    logIn: true,
    loggedIn: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.loggedIn !== prevProps.loggedIn && this.props.loggedIn) {
      this.setState({ loggedIn: true });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.logIn
      ? this.props.login(this.state.username, this.state.password)
      : this.props.register(this.state.username, this.state.password);
  };

  render() {
    let token = localStorage.getItem('token');
    console.log(token);
    if (this.props.loggedIn) return <Redirect to="/boards" />;
    return (
      <Wrapper>
        {this.state.logIn ? <h1>Log In to Trello</h1> : <h1>Sign Up</h1>}
        {this.state.logIn ? <p>or create an account</p> : <p>or login</p>}
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              autoComplete="off"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <Button type="submit" value="submit" />
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.loggedIn,
});

export default connect(
  mapStateToProps,
  { register, login },
)(AuthContainer);
