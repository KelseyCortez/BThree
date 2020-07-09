
import About from './pages/about';
import MapContainer from './component/MapContainer';
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Account from "./pages/account";
import Chat from "./component/Chat";

// creates variables that allow chrome speech recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.start();

function App() {
  // Creates variables that act like state
  let [phrase, setPhrase] = useState("");

  const voiceCommands = () => {
    recognition.onstart = () => {
      console.log("Listening");
    };

    recognition.onresult = (e) => {
      // If voice is recognized this function runs.
      let current = e.resultIndex;

      let transcript = e.results[current][0].transcript;
      let mobileRepeatBug =
        current === 1 && transcript === e.results[0][0].transcript;
      console.log(transcript);

      if (!mobileRepeatBug) {
        // checks transcript taken from voice command act performs logic based on that.
        if (transcript === "help" || transcript === " help") {
          setPhrase((phrase = "yes"));
          console.log(phrase);
        }
      }
    };
  };

  useEffect(() => {
    // This function runs voiceCommands function whenever the page loads.
    voiceCommands();

    fetch('/api/v1/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  })

  });


  return (
    <Router>
      <div className="App">
        <div>
          <h1>Welcome to the safety app.</h1>

        </div> 
        
        <Route path="/register" component={Register} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/feed" component={Feed} /> 
        <Route path="/account"  component={Account}/> 
        <Route path="/about" component={About}/> 
        </div>
     

        <Route path="/map" component={MapContainer} />
        <Route path="/account" component={Account} />
        <Route path="/chat" component={Chat} />


        <Switch>
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
