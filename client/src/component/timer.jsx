import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Start } from 'twilio/lib/twiml/VoiceResponse';
import './timer.css' 
import axios from 'axios'


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 0,
            value: "",
            color: "black"
        };

        this.countDownTimer = this.countDownTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    myChangeHandler = (event) => {
        this.setState({ value: event.target.value });
    }
    countDownTimer = (e) => {
        
        e.preventDefault() 
        let id = this.props.id 
        console.log(id)
        let start = this.state.value
        let timeLength = this.state.value
        console.log(timeLength)
        timeLength = parseInt(timeLength)
        let seconds = timeLength / 1000
        console.log(seconds);
        start = seconds
        let myfunc = setInterval(() => {
            start = start - 1
            console.log(start);
            console.log(this.state.color)
            this.setState({ timeLeft: start })
            if (start <= seconds / 2 && start > seconds / 4) {
                this.setState({ color: "yellow" })
            } if (seconds / 4 >= start) {
                this.setState({ color: "red" })
            } if (start == 0) {
                axios.post(('/api/v1/sms/alert/timer'),{id}) 
                .then (data => console.log(data))
                clearInterval(myfunc) 
            } if (this.state.value === "home") {
                clearInterval(myfunc)
                this.setState(({ timeLeft: "home" }))
            }
        }, 1000)
    }
    resetTimer = (e) => {
        e.preventDefault()
        this.setState(({ value: "home" }))
        // console.log(this.state.value)  
        // clearInterval(this.countDownTimer) 
        // this.setState(({timeLeft: "home"}))
    }

    render() {


        return (
            <div className="Timer1">

                <div style={{ backgroundColor: `${this.state.color}` }} className="numbers"> {this.state.timeLeft} </div>

                <div className="flexRight">
                    <form onSubmit={this.countDownTimer}>
                        <div className="flexColumn"> 
                        <select className="select" onChange={this.myChangeHandler} value={this.state.value}>
                                <option selected="selected"> Just in Case</option>
                                <option name="secs" value="6000"> 6 seconds </option>
                                <option name="secs" value="60000"> 1 minute </option>
                                <option name="secs" value="3600000"> 1 hour </option>
                                <option name="secs" value="14400000"> 4 hour </option>
                                <option name="secs" value="86400000"> 1 day </option>
                            </select>
                            <input className="timeSelect" value="Start" type="submit" />
                            <input className="timeSelect" onClick={this.resetTimer} value="Cancel" />

                          
                        </div>


                    </form>
                </div>

            </div>

        )
    }
}

export default Timer;