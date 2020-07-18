import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import EmergencyContacts1 from '../component/emergencyContacts'

export default class EditContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phoneNumber: '',
            relationship: '',

        }
        this.makeContactChanges = this.makeContactChanges.bind(this)
    }
    // edits contact info
    makeContactChanges = (e) => {
        e.preventDefault();
        // const { id } = this.props;
        fetch(`/api/v1/contacts`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(res => res.json())
            .then(contact => {
                console.log(contact);
                this.setState({
                    contacts: contact
                })
                this.props.history.push('/account')
            })

    }

    handleChange = (e) => {

        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.makeContactChanges}>

                    <Form.Row>
                        Emergency Contact <Col>
                            <Form.Control placeholder="Name" name='name' value={this.state.name} onChange={this.handleChange} type="text" required />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number " name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} type="text" required />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name='relationship' value={this.state.relationship} onChange={this.handleChange} type="text" required />
                        </Col>
                    </Form.Row>
                    <Button type='submit'> Save </Button>
                </Form>

            </div>
        )
    }
}

