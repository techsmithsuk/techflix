import React, {ReactElement} from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {PlayerPage} from "../PlayerPage/PlayerPage";
import {NavBar} from "../NavBar/NavBar";

export function App(): ReactElement {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/:filmId" component={PlayerPage}/>
      </Switch>
    </Router>
  );
}
