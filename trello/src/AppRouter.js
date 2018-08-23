import React from "react";
import { Route, Switch, withRouter, matchPath } from "react-router-dom";
import styled, { injectGlobal } from 'styled-components';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import BoardContainer from './containers/BoardContainer';
import background from './assets/background.png'

injectGlobal` 
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    font-size: 14px;
  }
  html, body, #root {
    background-color: white;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
`
const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${props => props.background ? 'url(' + background +')' : 'none'};
  
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: border-box;
`
 class AppRouter extends React.Component { 
  render() {
  let boardPage = false;
   if (matchPath(this.props.location.pathname, { path: '/board/:id' })) {
    matchPath(this.props.location.pathname, { path: '/board/:id' }).isExact && (boardPage = true);
   }
  return (
  
    <AppWrapper background={boardPage}>
      <Header transparent={boardPage}/>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/board/:id' component={BoardContainer} />
      </Switch>
    </AppWrapper>
  
  
)}};

export default withRouter(AppRouter);