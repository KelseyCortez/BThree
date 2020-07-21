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

                    <Navbar style={{ backgroundColor: "#8B0000", height: '100%', width: "100%", display: 'flex', flexWrap: 'wrap'}}>
                        <Navbar.Brand className="glow" style={{ fontSize: '85px', color: 'white', fontFamily: "Bungee Inline", letterSpacing: "3px", marginLeft: "20px", fontSize: '5vh'}}>BThree</Navbar.Brand>

                        <Nav className="justify-content-end ml-auto" id="links" activeKey="/home">
                            <Nav.Item className="nav">
                                <Nav.Link style={{ color: 'white'}} className="link" href="/feed">Feed </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav">
                                <Nav.Link style={{ color: 'white' }}  className="link" href='/chat'>Forum <div className="inviteFriends">  1  </div></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav">

                                <Nav.Link style={{ color: 'white' }} className="link" href="/account">Account</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav">
                                <Nav.Link style={{ color: 'white', height: '2vh' }}  className="link" href="/"><Button style={{ color: 'white', height: '5vh'}} onClick={this.onClick} >Log Out</Button></Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Navbar>
                </div>
            )
        } else {
            return (
                <Navbar style={{ backgroundColor: "#8B0000" }}>
                    <Nav.Link href='/' style={{ fontSize: '55px', color: 'white', fontFamily: "Bungee Inline" }}>BThree</Nav.Link>
                </Navbar>
            )
        }
    }
}