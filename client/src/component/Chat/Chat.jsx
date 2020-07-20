import React, { Component } from "react";
import io from "socket.io-client";
import './Chat.css';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment'
import { Redirect } from 'react-router-dom'

moment().format()

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            messages: [],
            name: "",
        };

        this.socket = io("localhost:3001");
    }

    componentDidMount() {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                console.log(data)
                if (data === 'Logged Out') {
                    this.setState({ Redirect: true })
                }
            });
        fetch(`/api/v1/messages`)
            .then(res => res.json())
            .then(messages => {
                this.setState({
                    messages: messages
                })
            })

        this.socket.on("receive_message", (data) => {
            console.log(data)
            this.addMessage(data);

        });

        this.socket.on("not_logged_in", () => {
            this.props.history.push('/login')
        });
    }

    addMessage = (data) => {
        console.log(data);
        this.setState({
            messages: [...this.state.messages, data],
        });
        console.log(this.state.messages);
    };

    sendMessage = (e) => {
        e.preventDefault();
        this.socket.emit("send_message", {
            message: this.state.message,
        });
        this.setState({
            message: "",
        });
    };


    render() {
        return (
            <div className='container'>
                {this.state.Redirect ? <Redirect to='/login' /> : (
                    <div className="messages">
                        <h2 style={{textAlign: 'center'}}>What's On Your mind? </h2>
                        {this.state.messages.map((message, index) => {
                            return (

                                <div className="message" key={index}>
                                    <span style={{ fontWeight: 'bold', color: "red", fontSize: "20px" }}> {message.author}: </span>
                                    <span style={{ fontSize: "20px" }}> {message.message} </span> <br />
                                    <span style={{ fontSize: "10px", fontFamily: "Bungee" }}> {moment(message.time).format('MMMM Do YYYY, h:mm:ss a')} </span>

                                    <hr className="horizontalRule" />
                                </div>
                            );
                        })}
                        <div>

                            <form>
                                <input className='chat-input'
                                    type="text"
                                    placeholder="Send Message"
                                    value={this.state.message}
                                    onChange={(e) =>
                                        this.setState({
                                            message: e.target.value,
                                        })
                                    }
                                />
                                <SendIcon
                                    type='button'
                                    variant="outline-secondary"
                                    onClick={this.sendMessage}>Send </SendIcon>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
