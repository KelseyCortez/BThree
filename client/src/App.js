import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/register'
function App() {
  return (
    <Router>
      <div className="App"> 

        <div>
          <h1>Welcome to the safety app.</h1>
        </div> 

        <Route path="/register" component={Register} /> 
        <Switch>
          <Route path="/"/>

          
          <Route path="/login"/>
          
          

          <Route path="/feed"/> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;
