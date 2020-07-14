import React, { Component } from 'react' 
import '../component/emergencyContacts.css'

class EmergencyContacts1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            phoneNumber: this.props.phoneNumber,
            relationship: this.props.relationship
        }
    }
    render() {
        let name = this.state.name
        let number = this.state.phoneNumber
        let relationship = this.state.relationship



        return (
            <div className="EmergencyContacts">

                <div> Name: {name} </div>

                <div> Number: {number}</div>
                <div> Relationship: {relationship} </div>

            </div>

        );
    }
}

export default EmergencyContacts1;