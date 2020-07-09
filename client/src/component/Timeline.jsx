import React, { Component, Fragment } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <Fragment>
            <div>
                <p>Zahria started sharing her location with you</p>
                <button type='submit'>Chat</button>
            </div>

            <div>
                <p>Kelsey stopped sharing her location with you</p>
                <button type='submit'>Chat</button>
            </div>

            <div>
                <p>Parker started sharing her location with you</p>
                <button type='submit'>Chat</button>
            </div>

            </Fragment>
        )
    }
}
