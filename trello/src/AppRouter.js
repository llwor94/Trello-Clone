import React, { Fragment } from "react";
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
  min-width: 100%;
  background-image: ${props => props.background ? 'url(' + background +')' : 'none'};
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
  position: absolute;
  
`
 class AppRouter extends React.Component { 
  render() {
  let boardPage = false;
   if (matchPath(this.props.location.pathname, { path: '/board/:id' })) {
    matchPath(this.props.location.pathname, { path: '/board/:id' }).isExact && (boardPage = true);
   }
  return (
  <Fragment>
    <Header transparent={boardPage}/>
    <AppWrapper background={boardPage}>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/board/:id' component={BoardContainer} />
      </Switch>
    </AppWrapper>
  </Fragment>
  
)}};

export default withRouter(AppRouter);