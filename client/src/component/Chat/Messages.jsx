import React from 'react'

export default function Messages(props) {
    return (
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
        </div>
    )
}
