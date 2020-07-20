import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './navBar.css'


export default class NavBar extends Component {

    onClick = (e) => {
        axios.get('/api/v1/logout')
            // .then(res => res.json())
            .then(data => { this.props.setLoggedOut('logged out') })
    }

    render() {
        const { loggedIn } = this.props

        if (loggedIn === 'logged in') {
            return (
                <div>

                    <Navbar style={{ backgroundColor: "#8B0000", height: "16vh" }}>
                        <Navbar.Brand className="glow" style={{ fontSize: '85px', color: 'white', fontFamily: "Bungee Inline", letterSpacing: "3px", marginLeft: "20px" }}>BThree</Navbar.Brand>

                        <Nav className="justify-content-end ml-auto" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee" }} href="/feed">Feed </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee" }} href='/chat'>Forum <div className="inviteFriends">  1  </div></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>

                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee" }} href="/account">Account</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee" }} href="/"><Button style={{ color: 'white' }} onClick={this.onClick} >Log Out</Button></Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Navbar>
                </div>
            )
        } else {
            return (
                <Navbar style={{ backgroundColor: "#8B0000" }}>
                    <Navbar.Brand style={{ fontSize: '55px', color: 'white', fontFamily: "Bungee Inline" }}>BThree</Navbar.Brand>
                </Navbar>
            )
        }
    }
}