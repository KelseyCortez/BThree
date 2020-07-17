import About from "./pages/about";
import MapContainer from "./component/MapContainer";
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
import PanicButton from './component/PanicButton';
import MyNavbar from './component/navbar'
import axios from 'axios'
import Timer from "./component/timer";
// creates variables that allow chrome speech recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


function App() {
  let [userPhrase, setPhrase] = useState("");
  let [runVoice, setRun] = useState(true);
  let [listening, setListening] = useState(false);


  const voiceCommands = () => {
    setListening((listening = false))
    recognition.start();
    recognition.onstart = () => {
      // console.log("Listening");
    };
    setTimeout(() => {
      recognition.stop();
      // console.log('stop');
    }, 7000)

    recognition.onresult = (e) => {
      setListening((listening = true))
      // If voice is recognized this function runs.
      let current = e.resultIndex;

      let transcript = e.results[current][0].transcript;
      let mobileRepeatBug =
        current === 1 && transcript === e.results[0][0].transcript;
      if (!mobileRepeatBug) {
        fetch("/api/v1/user")
          .then((res) => res.json())
          .then((data) => {
            if(data === 'Logged Out'){
              console.log('please log in')
            } else {
              const phrase = data.phrase.toLowerCase();
              console.log(phrase)
              if (transcript === phrase || transcript === ` ${phrase}`) {
                axios.post('/api/v1/sms/alert', {})
                .then(data => {console.log(data)})
                recognition.stop();
                setRun((runVoice = false));
              }
            }
          });
      }
    };
  };

  useEffect(() => {
    //This function runs voiceCommands function whenever the page loads.

    const interval = setInterval(() => {
      if (runVoice === false) {
        console.log('done Running')
      } else {
        voiceCommands()
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="App"> 
      <MyNavbar />
        {/* <PanicButton /> */}

        <Switch>
          <Route path="/" exact component={LandingPage} /> 
          
        </Switch>


        <div> 
        <Route path="/timer" component={Timer}/>
          <Route path="/register" component={Register} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/login" component={Login} />
          <Route path="/feed" component={Feed} />
          <Route path="/account" component={Account} />
          <Route path="/about" component={About} />
        </div>

        <Route path="/map" component={MapContainer} />
        <Route path="/chat" component={Chat} />
      </div>

    </Router>
  );
}

export default App;



