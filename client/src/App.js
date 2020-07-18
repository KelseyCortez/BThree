import About from "./pages/about";
import Map from "./component/Map";
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Contacts from "./pages/contacts";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Account from "./pages/account";
import Chat from "./component/Chat/Chat";
import { Nav } from "react-bootstrap";
import LandingPage from "./component/LandingPage";
import PanicButton from "./component/PanicButton";
import MyNavbar from "./component/navbar";
import axios from "axios";

import { connect, useSelector } from 'react-redux';

// creates variables that allow chrome speech recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

function App() {
  const location = useSelector(state => {
    return {
        latitude: state.latitude,
        longitude: state.longitude
    }
  })
  let [userPhrase, setPhrase] = useState("");
  let [runVoice, setRun] = useState(true);
  let [listening, setListening] = useState(false);

  let [loggedIn, setLoggedIn] = useState("not checked");

  const checkLogIn = () => {
    fetch("/api/v1/user")
      .then((res) => res.json())
      .then((data) => {
        if (data !== "Logged Out") {
          setLoggedIn("logged in");
        } else {
          setLoggedIn("logged out");
        }
      })
      .catch((err) => err);
  };

  const voiceCommands = () => {
    setListening((listening = false));
    recognition.start();
    // recognition.onstart = () => {
    //   // console.log("Listening");
    // };
    setTimeout(() => {
      recognition.stop();
      // console.log('stop');
    }, 6000)

    recognition.onresult = (e) => {
      setListening((listening = true));
      // If voice is recognized this function runs.
      let current = e.resultIndex;

      let transcript = e.results[current][0].transcript;
      let mobileRepeatBug =
        current === 1 && transcript === e.results[0][0].transcript;
      if (!mobileRepeatBug) {
        fetch("/api/v1/user")
          .then((res) => res.json())
          .then((data) => {
            if (data === "Logged Out") {
              console.log("please log in");
            } else {
              const phrase = data.phrase.toLowerCase();
              console.log(phrase);
              if (transcript === phrase || transcript === ` ${phrase}`) {
                axios.put('/api/v1/user', {
                  lat: location.latitude,
                  lng: location.longitude
              }).then(
                  axios.post('/api/v1/sms/alert', {})
                  // .then(res => res.json())
              )  
                recognition.stop();
                setRun((runVoice = false));
              }
            }
          });
      }
    };
  };

  useEffect(() => {
    checkLogIn();
    //This function runs voiceCommands function whenever the page loads.

    const interval = setInterval(() => {
      if (runVoice === false) {
        console.log("done Running");
      } else {
        voiceCommands();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="App">
        <MyNavbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        {/* <PanicButton /> */}
        {loggedIn == "not checked" && <div> Loading.. </div>}

        {loggedIn == "logged out" && (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} />
            </Route>
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
          </Switch>
        )}

        {loggedIn == "logged in" && (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/feed" component={Feed} />
            <Route path="/account" component={Account} />
            <Route path="/map" component={Map} />
            <Route path="/chat" component={Chat} />
            <Route path="/about" component={About} />
          </Switch>
        )}
      </div>
    </Router>
  );
}
export default App;
