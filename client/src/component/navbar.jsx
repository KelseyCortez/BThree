import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'


class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar style={{backgroundColor:"#8B0000"}}>
                    <Navbar.Brand style={{ fontSize: '55px', color: 'white', fontFamily: "Bungee Inline" }}>BThree</Navbar.Brand>
                    <Nav className="justify-content-end ml-auto" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white', fontFamily: "Bungee" }} href="/feed">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white', fontFamily: "Bungee"  }} href='/chat'>Messages</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white', fontFamily: "Bungee"  }} href="/account">Account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white', fontFamily: "Bungee"  }} href='/'>Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>


        );
    }
}

export default MyNavbar;