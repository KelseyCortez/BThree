import React, { Component } from "react";
import io from "socket.io-client";
import TextField from '@material-ui/core/TextField';
import MessageList from './MessageList'
import './Chat.css'

import { Button } from 'react-bootstrap'
import { Input } from "@material-ui/core";
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
        fetch(`/api/v1/messages/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(messages => {
            this.setState({
                messages: messages
            })
        })
        this.socket.on("receive_private", (data) => {
            console.log(data)
            if (this.props.match.params.id == data.authorId) {
                this.addMessage(data);
            }
        });
        this.socket.on("receive_own_private", (data) => {
            console.log(data)
            this.addMessage(data);
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
        this.socket.emit("send_private", {
            userId: this.props.match.params.id,
            message: this.state.message,
        });
        this.setState({
            message: "",
            fromMe: true
        });
    };

    render() {
        return (
            <div className='container'>
                <div className='messageList'>

                </div>
                <div className="messages">
                    {this.state.messages.map((message, index) => {
                        return (
                            <div key={index}>
                                {" "}
                                <span>{message.author}: </span>
                                {message.message}
                                <hr />
                            </div>
                        );
                    })}
                    <div>
                    <form className='chat-input'>
                        <input
                            type="text"
                            placeholder="Send Message"
                            value={this.state.message}
                            onChange={(e) =>
                                this.setState({
                                    message: e.target.value,
                                })
                            }
                        />
                    <Button style={{ margin: '20' }} type='button' class='btn btn-secondary' onClick={this.sendMessage}>Send </Button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}
