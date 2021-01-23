import React from 'react';
import './App.css';
import './assets/main.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Targets from './components/Targets/Targets';
import Construction from './components/Construction';
import { TargetContextProvider } from './contex/TargetsState';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <TargetContextProvider>
          <Route exact path="/" component={Targets} />
          <Route exact path="/:id" component={Construction} />
        </TargetContextProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
