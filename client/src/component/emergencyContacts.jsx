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
            <div className="EmergencyContacts flexColumn">

                <div> Name: <span className="data" > {name} </span>  </div>

                <div> Number: <span className= "data">  {number} </span> </div>
                <div> Relationship: <span className="data">  {relationship} </span> </div>

            </div>

        );
    }
}

export default EmergencyContacts1;