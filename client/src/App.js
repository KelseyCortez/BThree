import About from "./pages/about";
import Map from "./component/Map";
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Register from "./pages/register";
import Contacts from "./pages/contacts";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Account from "./pages/account";
import Chat from "./component/Chat/Chat";
import LandingPage from "./component/LandingPage";
import PanicButton from './component/PanicButton';
import MyNavbar from './component/navbar'
import axios from 'axios'
import Footer from "./component/footer"
import { connect, useSelector } from 'react-redux';

// creates variables that allow chrome speech recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

function App({latitude, longitude}) {
  // Passes Redux props to App and creates variable to use Location data
  const location = useSelector(state => {
    return {
        latitude: state.latitude,
        longitude: state.longitude
    }
  })
  // Hooks that change the way the speech functions run.
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

  // Voice command function that starts the browser listening.
  const voiceCommands = () => {
    console.log(location)
    setListening((listening = false));
    recognition.start();
    // Set time out that insures that even if someone talks for 6 seconds it will still end on time.
    setTimeout(() => {
      recognition.stop();
    }, 6000)

    recognition.onresult = (e) => {
      setListening((listening = true));
      // If voice is recognized this function runs.
      let current = e.resultIndex;
      let transcript = e.results[current][0].transcript;
      let mobileRepeatBug =
        current === 1 && transcript === e.results[0][0].transcript;
      // If there are no bugs the function will continue.
      if (!mobileRepeatBug) {
        // Gets the users from the database and checks to see if they are logged out.
        fetch("/api/v1/user")
          .then((res) => res.json())
          .then((data) => {

            if (data === "Logged Out") {
              console.log("Logged Out")
            } else {
              // If they are not logged out it checks the user phrase in the database and if it is the same as
              // the transcript it will run the put request for location and the post request for the sms message.
              const phrase = data.phrase.toLowerCase();
              console.log(phrase);
              if (transcript === phrase || transcript === ` ${phrase}`) {
                console.log(location)
                axios.put('/api/v1/user', {
                  lat: location.latitude,
                  lng: location.longitude
              }).then(() => {
                axios.post('/api/v1/sms/alert', {})
                // .then(res => res.json())
                .then(data => {console.log(data)
                    console.log(location.latitude)})
            })
              // Stops the recognition after the alert is reached.
                recognition.stop();
                setRun((runVoice = false));
              }
            }
          });
      }
    };
  };

  // useEffect hook acts like onMount and runs whenever the page is loaded.
  useEffect(() => {
    checkLogIn();
    // If a user is logged in it runs the voiceCommand function on a timer. Every 8 seconds the function will be called.
    const interval = setInterval(() => {
      if (runVoice === false) {
        console.log("done Running");
      } else {
        voiceCommands();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <Router>
      <div className="App">

        <MyNavbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> 
        <footer> <Footer /> </footer>

        {loggedIn == "not checked" && <div> Loading.. </div>}

        {loggedIn == "logged out" && (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} />
            </Route>
            <Route path="/register">
              <Register setLoggedIn={setLoggedIn} />
              </Route>
            <Route path="/about" component={About} />
            <Redirect to='/login' />
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
            <Redirect to='/' />
          </Switch>
        )}
      </div>

    </Router>
  );
}
export default App;
