import React, { Component } from "react";
import io from "socket.io-client";
import { Nav, Navbar } from 'react-bootstrap'
import './Chat.css'

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
        this.socket.on("receive_private", (data) => {
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
            author: this.state.name,
            message: this.state.message,
        });
        this.setState({ message: "" });
    };

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand style={{ fontSize: '55px', color: 'white' }}>BThree</Navbar.Brand>
                    <Nav className="justify-content-end ml-auto" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href="/feed">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href='/chat'>Messages</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href="/account">Account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href='/'>Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>

            <div className='container'>
                <div className='card-body'>
                    <div style={{color: 'white'}}>{this.state.name}</div>
                    <hr />
                    <div className="messages" style={{color: 'white'}} >
                        {this.state.messages.map((message, index) => {
                            return (
                                <div key={index}>
                                    {" "}
                                    {message.author}: {message.message}
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Message"
                            value={this.state.message}
                            onChange={(e) =>
                                this.setState({
                                    message: e.target.value,
                                })
                            }
                        />
                        <br />
                        <button onClick={this.sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
