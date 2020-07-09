import React, { Component } from 'react'
import './account.css'
import Button from 'react-bootstrap/Button' 

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Username: "",
            Password: "",
            Email: "",
            CellNumber: "",
            Age: "",
            FriendList: []



        }
    }
    makeAccountChanges = (e) => { 
        fetch()




    }
    render() {

        let name = this.state.Name
        let username = this.state.Username
        let password = this.state.Password
        let email = this.state.Email
        let cellNumber = this.state.cellNumber
        let age = this.state.Age
        let FriendList = this.state.FriendList

        return (
            <div className="AccountPage">

                <header> Account Information </header>

                <div className="Info flexRow">

                    <div className="TextArea">

                        <div>Name: {name} </div>
                        <div>Username:{username} </div>
                        <div>Age: {age} </div>
                        <div>Password:{password} </div>
                        <div>Email: {email} </div>
                        <div>Cellular Number: {cellNumber}</div>
                        <div> Age: {age} </div>
                        <Button> Edit </Button>


                    </div>


                </div>






            </div>
        );
    }
}

export default Account;