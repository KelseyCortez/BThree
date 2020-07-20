import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function LandingPage() {
    return (
        <div className="App">
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", height: '100%', margin: '30px auto' }}>
                {/* <h1 style={{ color: 'white', margin: '30px', fontFamily: "Bungee" }}> B3</h1> */}

                <div style={{ display: "flex", flexDirection: "row",  width: "45vw", height:"65vh", alignItems:"center", justifyContent:"center", backgroundColor:"white" }}>
                    <div style={{writingMode:"vertical-rl" ,textOrientation: "upright", backgroundColor:"black", color: "white", fontFamily:"Bungee", letterSpacing:"5px", fontSize:"25px", textAlign:"center", height:"100%", width:"5%", padding:"30px"}}>Better Together </div>
                    <Card style={{width:"95%", borderStyle: "none",height:"100%"}} className="text-center">
                        <Card.Body style={{ backgroundColor: '#000133', color: 'white', fontWeight: "bold"}}>
                            <Card.Text style={{ fontSize: '30px', color: "white", fontFamily: "Bungee Hairline" }}>
                                B3 is an app that allows users to share their location via SMS to emergency contacts.
                             </Card.Text>
                            <Link to={'/login'}>
                                <Button style={{ fontFamily: "Bungee", color: "white" }} variant="outline-secondary">Log In</Button></Link>
                            <Link to={'/register'}><Button style={{ fontFamily: "Bungee", color: "white", onhover: "pointer" }} variant="outline-secondary">Don't have an account? Sign Up</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
