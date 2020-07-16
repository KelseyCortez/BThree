import React, { Component } from "react";
import io from "socket.io-client";
import './Chat.css';
import SendIcon from '@material-ui/icons/Send';

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

        this.usersList()
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
        });
    };

    usersList = (user) => {
        
        this.setState({
            users: [...this.state.users]
        })
    }



    render() {
        const user = this.props.match.params.firstName
        return (
            <div className='container'>
                <div className='usersList'>
                    <h2>Messages</h2>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                {user.name}
                            </div>
                        )
                    })}
                </div>


                <div className="messages">
                    {this.state.messages.map((message, index) => {
                        return (
                            <div key={index}>
                                <span style={{ float: 'left' }}> {message.author}: </span>
                                {message.message}
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
