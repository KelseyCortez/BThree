import React from 'react'

export default function Input(props) {
    return (
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
    )
}
