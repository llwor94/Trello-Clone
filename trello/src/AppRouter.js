import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { injectGlobal } from 'styled-components';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import BoardContainer from './containers/BoardContainer';

injectGlobal` 
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  body {
    background-color: white;
  }
`

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/board/:name' component={BoardContainer} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
