import React, { Component } from "react";
import io from "socket.io-client";

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            messages: [],
            name: "Zahria",
        };

        this.socket = io("localhost:3001");
    }

    componentDidMount() {
        this.socket.on("RECEIVE_MESSAGE", (data) => {
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
        this.socket.emit("SEND_MESSAGE", {
            author: this.state.name,
            message: this.state.message,
        });
        this.setState({ message: "" });
    };

    render() {
        return (
            <div className='container'>
                <div className='card-body'>
                    <div>{this.state.name}</div>
                    <hr />
                    <div className="messages">
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
        );
    }
}
