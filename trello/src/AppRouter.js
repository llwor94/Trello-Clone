import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { injectGlobal } from 'styled-components';
import Header from './components/Header';
import BoardsContainer from './containers/BoardsContainer';

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
       <Route exact path='/' component={BoardsContainer} />
        
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
