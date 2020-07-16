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

    handleChange1 = (e) => {

        const { value, name } = e.target;
        this.setState({
            contact1: { ...this.state.contact1, [name]: value }

        }, () => {
            
        });

    }
    handleChange2 = (e) => {
        const { value, name } = e.target;
        this.setState({
            contact2: { ...this.state.contact2, [name]: value }

        }, () => {
            
        });
    }
    handleChange3 = (e) => {
        const { value, name } = e.target;
        this.setState({
            contact3: { ...this.state.contact3, [name]: value }
        }, () => {
        
        });
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Row>
                        Emergency Contact 1 <Col>
                            <Form.Control placeholder="Name" name='name' value={this.state.contact1.name} onChange={this.handleChange1} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number " name='phoneNumber' value={this.state.contact1.phoneNumber} onChange={this.handleChange1} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact1.relationship} onChange={this.handleChange1} type="text" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        Emergency Contact 2
                        <Col>
                            <Form.Control placeholder="Name" name='name' value={this.state.contact2.name} onChange={this.handleChange2} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number" name='phoneNumber' value={this.state.contact2.phoneNumber} onChange={this.handleChange2} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact2.relationship} onChange={this.handleChange2} />

                        </Col>
                    </Form.Row>
                    <Form.Row>
                        Emergency Contact 3
                        <Col>

                            <Form.Control placeholder="Name" name='name' value={this.state.contact3.name} onChange={this.handleChange3} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number" name='phoneNumber' value={this.state.contact3.phoneNumber} onChange={this.handleChange3} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact3.relationship} onChange={this.handleChange3} type="text" />

                        </Col>

                    </Form.Row> */}
                    <Button onSubmit={this.handleFormSubmit} type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
