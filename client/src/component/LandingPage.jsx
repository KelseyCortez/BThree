import React from 'react'
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function LandingPage() {
    return (
        <div className="App">
            <div style={{ width: '45%', height: '100%', margin: '10px auto' }}>
                <h1 style={{ color: 'grey', margin: '30px', fontFamily:"Bungee" }}> B3</h1>
                <Card className="text-center">
                    <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                        <Card.Text style={{ fontSize: '20px', color:"white", fontFamily: "Bungee Hairline" }}>
                            B3 is an app that allows users to share their location with
                            friends and family. They can also send their location and SMS
                            messages to their emergency contacts.

                </Card.Text>
                        <Link to={'/login'}>
                            <Button style={{fontFamily:"Bungee"}} variant="outline-secondary">Log In</Button></Link>
                        <Link style={{fontFamily:"Bungee"}} to={'/register'}><Button variant="outline-secondary">Don't have an account? Sign Up</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
