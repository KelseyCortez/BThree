import React, { Component } from "react";
import io from "socket.io-client";
import './Chat.css';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment'

moment().format()

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            messages: [],
            name: "",
            users: []
        };

        this.socket = io("localhost:3001");
    }

    componentDidMount() {
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
                {/* <div>
                    <h1>Forum </h1>
                </div> */}
                <div className="messages">
                    {this.state.messages.map((message, index) => {
                        return (
                            <div key={index} style={{ float: 'left' }}>
                                <span style={{fontWeight: 'bold'}}> {message.author}: </span>
                                {message.message} | {moment(message.time).format('MMMM Do YYYY, h:mm:ss a')}

                                <hr />
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
                            <SendIcon style={{ margin: '20', textDecorationLine: 'underline'}}
                                type='button'
                                variant="outline-secondary"
                                onClick={this.sendMessage}>Send </SendIcon>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
