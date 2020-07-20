import React, { Component } from 'react'
import './pages.css'
import './account.css'
import { Button } from 'react-bootstrap'
import EmergencyContacts1 from '../component/emergencyContacts'
import { Redirect, Link } from 'react-router-dom';
// import EditContact from './editcontact';
import Timer from '../component/timer' 
import PanicButton from '../component/PanicButton'



class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Username: "",
            Password: "",
            Email: "",
            Age: "",
            FriendList: [],
            EmergencyContacts: [],
            id: "",
            Redirect: false
        }
    }

    getAccountInfo() {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                console.log(data)
                if (data === 'Logged Out') {
                    this.setState({ Redirect: true })
                } else {
                    this.setState({
                        Name: (data.firstName + " " + data.lastName),
                        Username: data.userName,
                        Password: data.password,
                        Email: data.email,
                        id: data.id, 
                        Age: data.dob, 
                    })
                }
            })
            .catch(err => err)
    }

    getEmergencyContacts() {
        fetch(`/api/v1/user/contacts`)
            .then(res => res.json())
            .then(contacts => {
                console.log(contacts)
                this.setState({
                    EmergencyContacts: contacts
                })
            })
    }


    //deletes user account
    removeUser = () => {
        fetch(`/api/v1/users`, {
            method: 'DELETE'
        })
            .then((data) => {
                this.setState({
                    Redirect: !this.state.Redirect
                })
            }
            )
    }

    componentDidMount() {
        this.getAccountInfo();
        this.getEmergencyContacts();
    }

    render() {
        // if (!this.state.Redirect){
        let EmergencyContacts = this.state.EmergencyContacts;
        EmergencyContacts = EmergencyContacts.map((contact, index) => {
            let name
            return <EmergencyContacts1
                name={contact.name}
                phoneNumber={contact.phoneNumber}
                relationship={contact.relationship}
                key={index}

            />
        })

        let currentTime = new Date()
        let month = currentTime.getMonth()
        let year = currentTime.getFullYear()
        let day = currentTime.getDate()
        // let today = (month + "/" + day + "/" + year)

        let name = this.state.Name
        let username = this.state.Username
        let email = this.state.Email
        let cellNumber = this.state.cellNumber
        // let age = this.state.Age
        // age = today - age
        // let FriendList = this.state.FriendList 


        return (
            <div className="AccountPage ">
                {this.state.Redirect ? <Redirect to='/login' /> : (

                    <div> 
                        <div className="timerAndButton"> 
                      <div className="TimerArea">   <Timer /> </div>  
                      <div className="PB"> <PanicButton/> </div>
                      </div>
                        <div className="Main">
                            <div className="Title"> Account Information </div>
                            <div className="Info">

                                <div className="TextArea">
                                    <div>Name: <span className="data">{name}</span> </div>
                                    <div>Username: <span className="data">{username}</span> </div>
                                    <div>Email: <span className="data">{email}</span> </div>
                                    <Button onClick={this.removeUser}> Delete Account </Button>
                                </div>

                                <div className="EC">
                                    <div> Emergency Contacts </div>
                                    {EmergencyContacts}

                                    <Button ><Link style={{color:"white"}} to='/contacts'>Edit</Link> </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default Account;