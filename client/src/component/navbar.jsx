import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios' 
import './navBar.css'


function MyNavbar() {
    const onClick = (e)=>{
        axios.get('/api/v1/logout')
        // .then(res => res.json())
        .then(data => {console.log(data)})
    }

    
            return (
                <div>
                    <Navbar style={{backgroundColor:"#8B0000", height:"16vh"}}>
                        <Navbar.Brand className="glow" style={{ fontSize: '85px', color: 'white', fontFamily: "Bungee Inline", letterSpacing:"3px", marginLeft:"20px" }}>BThree</Navbar.Brand>
                        <Nav className="justify-content-end ml-auto" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee" }} href="/feed">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee"  }} href='/chat'>Forum</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee"  }} href="/account">Account</Nav.Link>
                            </Nav.Item> 
                            <Nav.Item>


                                <Nav.Link style={{ color: 'white', fontFamily: "Bungee"  }} href="/"><Button style={{ color: 'white' }} onClick={onClick} >Log Out</Button></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </div> 


        );
    }


export default MyNavbar;