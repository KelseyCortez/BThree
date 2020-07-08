import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/register'
import Login from './pages/login';
function App() {
  return (
    <Router>
      <div className="App"> 

        <div>
          <h1>Welcome to the safety app.</h1>
        </div> 

        <Route path="/register" component={Register} />  
        <Route path="/login" component={Login} />

        <Switch>
          <Route path="/"/>
          <Route path="/feed"/> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;
