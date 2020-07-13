import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function LandingPage() {
    return (
        <div className="App">
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/register'>Sign Up</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
            </Nav.Link>
                </Nav.Item>
            </Nav>

            <div style={{ maxWidth: '100%' }}>
                <h1 style={{ color: 'white', margin: '30px' }}> BThree</h1>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Text style={{ fontSize: '20px' }}>
                            BThree is an app that allows users to share their location with
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
