import React, { Component } from "react";
import io from "socket.io-client";
import './Chat.css'
import TextField from '@material-ui/core/TextField';
import { Button} from 'react-bootstrap'
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
        this.setState({ message: "" });
    };

    render() {
        return (
            <div>
            <div className='container'>

                <div className='MessageList'>
                    {/* messages list */}
                </div>


                <div className='Messages'>
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
                        <TextField id='outlined-basic' fullWidth
                            type="text"
                            placeholder="Send Message"
                            value={this.state.message}
                            onChange={(e) =>
                                this.setState({
                                    message: e.target.value,
                                })
                            }
                        />
                        <br />
                        <Button type='button' class='btn btn-secondary' onClick={this.sendMessage}>Send </Button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
