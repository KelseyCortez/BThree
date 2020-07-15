import React from 'react'
import { Card, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function LandingPage() {
    return (
        <div className="App">
            <Navbar>
                <Navbar.Brand style={{fontSize: '55px', color: 'white', fontFamily: "Bungee Inline"}}>BThree</Navbar.Brand>
                <Nav className="justify-content-end ml-auto" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link style={{color: 'white'}} href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{color: 'white'}} href="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{color: 'white'}} href='/register'>Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>

            <div style={{ width: '25%', height: '100%', margin: '10px auto' }}>
                <h1 style={{ color: 'grey', margin: '30px' }}> B3</h1>
                <Card className="text-center">
                    <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                        <Card.Text style={{ fontSize: '20px' }}>
                            B3 is an app that allows users to share their location with
                            friends and family. They can also send their location and SMS
                            messages to their emergency contacts.

                </Card.Text>
                        <Link to={'/login'}>
                            <Button variant="outline-secondary">Log In</Button></Link>
                        <Link to={'/register'}><Button variant="outline-secondary">Don't have an account? Sign Up</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
