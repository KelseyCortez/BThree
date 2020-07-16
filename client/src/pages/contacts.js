import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';


export default class Contacts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contact1: {
                name: "",
                phoneNumber: '',
                relationship: '',

            },
            contact2: {
                name: "",
                phoneNumber: '',
                relationship: '',

            },
            contact3: {
                name: "",
                phoneNumber: '',
                relationship: '',

            }
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        fetch('api/v1/user/contacts',

            {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            })
            .then(() => {
                this.props.history.push('/feed')
            }
            )
    }

    handleChange = (e, key) => {

        const { value, name } = e.target;
        this.setState({
            [key]: { ...this.state[key], [name]: value }
        });
    }



    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Row>
                        Emergency Contact 1 <Col>
                            <Form.Control placeholder="Name" name='name' value={this.state.contact1.name} onChange={(e) => this.handleChange(e, 'contact1')} type="text" required />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number " name='phoneNumber' value={this.state.contact1.phoneNumber} onChange={(e) => this.handleChange(e, 'contact1')} type="text" required />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact1.relationship} onChange={(e) => this.handleChange(e, 'contact1')} type="text" required />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        Emergency Contact 2
                        <Col>
                            <Form.Control placeholder="Name" name='name' value={this.state.contact2.name} onChange={(e) => this.handleChange(e, 'contact2')} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number" name='phoneNumber' value={this.state.contact2.phoneNumber} onChange={(e) => this.handleChange(e, 'contact2')} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact2.relationship} onChange={(e) => this.handleChange(e, 'contact2')} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        Emergency Contact 3
                        <Col>
                            <Form.Control placeholder="Name" name='name' value={this.state.contact3.name} onChange={(e) => this.handleChange(e, 'contact3')} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number" name='phoneNumber' value={this.state.contact3.phoneNumber} onChange={(e) => this.handleChange(e, 'contact3')} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact3.relationship} onChange={(e) => this.handleChange(e, 'contact3')} type="text" />
                        </Col>
                    </Form.Row>
                    <Button onSubmit={this.handleFormSubmit} type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
