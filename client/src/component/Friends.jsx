import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Timeline extends Component {
    render() {
        return (
            <Fragment>
            <div style={{margin: '5px'}}>
                <p style={{margin: '5px'}}>Jack</p>
                <Link to={'/chat/1'}><Button variant="light">Chat</Button></Link>
            </div>
            <div style={{margin: '10px'}}>
                <p style={{margin: '5px'}}>Kelsey</p>
                <Button variant="light">Chat</Button> 
            </div>

            <div style={{margin: '10px'}}>
                <p style={{margin: '5px'}}>David</p>
                <Button variant="light">Chat</Button> 
            </div>

            <div style={{margin: '10px'}}>
                <p style={{margin: '5px'}}>Parker</p>
                <Button variant="light">Chat</Button> 
            </div>

            <div style={{margin: '10px'}}>
                <p style={{margin: '5px'}}>Zahria</p>
                <Button variant="light">Chat</Button> 
            </div>

            </Fragment>
        )
    }
}
