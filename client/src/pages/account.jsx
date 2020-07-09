import React, { Component } from 'react'
import './account.css' 
import Button from 'react-bootstrap/Button'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="AccountPage">

                <header> Account Information </header>

                <div className="Info flexRow">

                    <div className="TextArea">

                        <div>Name: </div>  
                        <div>Username: </div> 
                        <div>Age: </div> 
                        <div>Password: </div> 
                        <div>Email:  </div> 
                        <div>Cellular Number: </div> 
                        <div> Age: </div>  
                        <Button> Edit: </Button>


                    </div>


                </div>






            </div>
        );
    }
}

export default Account;