import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/">
          <div>
            <h1>Welcome to the safety app.</h1>
          </div>
        </Route>
        <Route path="/login">
        </Route>
        <Route path="/register"></Route>
        <Route path="/feed"></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
