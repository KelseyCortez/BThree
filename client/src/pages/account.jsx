import React, { Component } from 'react'
import './account.css'
import {Button, Nav, Navbar } from 'react-bootstrap' 
import EmergencyContacts1 from '../component/emergencyContacts'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Username: "",
            Password: "",
            Email: "",
            // CellNumber: "",
            Age: "",
            FriendList: [],
            EmergencyContacts: [],
            



        }
    }

    getAccountInfo() {
        fetch(`/api/v1/users/${this.props.match.params.id}`)
            .then(res =>

                res.json()
            )
            .then(data => {
                console.log(data)
                this.setState({
                    Name: (data.firstName + " " + data.lastName),
                    Username: data.userName,
                    Password: data.password,
                    Email: data.email,
                    // CellNumber: 
                    Age: data.dob
                    // FriendList: 
                })
            })
            .catch(err => err)



    }

    getEmergencyContacts() {
        fetch(`/api/v1/users/${this.props.match.params.id}/contacts`)
        .then(res => res.json())
        .then(contacts => {
            console.log(contacts)
            this.setState({
              EmergencyContacts : contacts
            })
        })
    }

    makeAccountChanges = (e) => {
        fetch()

    }

    componentDidMount() {
        this.getAccountInfo();
        this.getEmergencyContacts();
    }

    render() { 
        let EmergencyContacts = this.state.EmergencyContacts;
        EmergencyContacts = EmergencyContacts.map((contact, index) => {
            let name
           return <EmergencyContacts1 
           name = {contact.name} 
           phoneNumber = {contact.phoneNumber} 
           relationship = {contact.relationship} 
           key = {index}
           
           />
        })

        let currentTime = new Date()
        let month = currentTime.getMonth()
        let year = currentTime.getFullYear()
        let day = currentTime.getDate()
        let today = (month + "/" + day + "/" + year)

        console.log(today)
        let name = this.state.Name
        let username = this.state.Username
        let password = this.state.Password
        let email = this.state.Email
        let cellNumber = this.state.cellNumber
        let age = this.state.Age
        console.log(age)
        age = today - age
        let FriendList = this.state.FriendList

        return (
            <div>
                <Navbar>
                    <Navbar.Brand style={{ fontSize: '55px', color: 'white' }}>BThree</Navbar.Brand>
                    <Nav className="justify-content-end ml-auto" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href="/feed">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href='/chat'>Messages</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href="/account">Account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: 'white' }} href='/'>Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>


                <div className="AccountPage">

                    <header> Account Information </header>

                    <div className="Info flexRow">

                        <div className="TextArea">

                            <div>Name: {name} </div>
                            <div>Username: {username} </div>
                            {/* <div>Age: {age} </div> */}
                            <div>Password: {password} </div>
                            <div>Email: {email} </div>
                            <div>Cellular Number: {cellNumber}</div>
                            <div className="flexColumn"> 
                                Emergency Contacts  
                                {EmergencyContacts}  
                                
                                </div>
                        
                            <Button> Edit </Button>


                        </div>


                    </div>






                </div>
            </div>
        );
    }
}

export default Account;