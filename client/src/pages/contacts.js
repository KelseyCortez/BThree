import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';


export default class Contacts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contact1: {
                name: "",
                phoneNumber: '',
                relationship: '',
                id: '',
            },
            contact2: {
                name: "",
                phoneNumber: '',
                relationship: '',
                id: '',

            },
            contact3: {
                name: "",
                phoneNumber: '',
                relationship: '',
                id: '',

            },
            editing: false,
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        fetch('/api/v1/user/contacts', {
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

    handleFormUpdate = (e) => {
        e.preventDefault();
        console.log(this.state)

        axios.put('/api/v1/user/contacts', {
            ...this.state
        })
            .then((res) => {
                console.log(res);
                this.props.history.push('/account')
            }
            )
    }

    //deletes contact
    removeContact = (id) => {
    console.log(this.state);
        axios.delete(`/api/v1/user/contacts`, {params: {id : id}})
            .then((res) => {
                console.log(res);
                const deletedId = res.data;
                let contactToDelete = Object.keys(this.state).find(contact => {
                if(this.state[contact].id == deletedId) {
                    return contact
                }
                })
                console.log(contactToDelete);
                return contactToDelete

            }) .then(contactToDelete => {
                    this.setState({
                        [contactToDelete] : {
                            name: '',
                            phoneNumber: '',
                            relationship: '',
                            id: '',
                        }
                    })

            })
            

    }

    handleChange = (e, key) => {

        const { value, name } = e.target;
        this.setState({
            [key]: { ...this.state[key], [name]: value }
        });
    }

    
    componentDidMount() {
        console.log(this.props);
        fetch(`/api/v1/user/contacts`)
            .then((data) => data.json())
            .then(data => {
                if (data.length > 0) {
                    this.setState({
                        editing: true
                    })
                }
                console.log(data);
                data.forEach((contact, index) => {
                    this.setState({
                        ...this.state,
                        [`contact${index + 1}`]: {
                            name: contact.name,
                            phoneNumber: contact.phoneNumber,
                            relationship: contact.relationship,
                            id: contact.id,
                        }
                    })

                })

            }
            )
    }


    render() {
        return (
            <div>
                {this.state.editing ?
                    <Form >

                        <Form.Row>
                            Emergency Contact 1 <Col>
                                <Form.Control placeholder="Name" name='name' value={this.state.contact1.name} onChange={(e) => this.handleChange(e, 'contact1')} type="text" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Phone Number " name='phoneNumber' value={this.state.contact1.phoneNumber} onChange={(e) => this.handleChange(e, 'contact1')} type="text" required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact1.relationship} onChange={(e) => this.handleChange(e, 'contact1')} type="text" />
                            </Col>
                            <Button onClick={()=>this.removeContact(this.state.contact1.id)}> X </Button>
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
                            <Button onClick={()=>this.removeContact(this.state.contact2.id)}> X </Button>
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
                            <Button onClick={()=>this.removeContact(this.state.contact3.id)}> X </Button>
                        </Form.Row>
                        <Button onClick={this.handleFormUpdate}>Save Changes</Button>

                    </Form>
                    :
                    <Form>
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
                                <Form.Control placeholder="Name" name='name' value={this.state.contact2.name} onChange={(e) => this.handleChange(e, 'contact2')} type="text" required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Phone Number" name='phoneNumber' value={this.state.contact2.phoneNumber} onChange={(e) => this.handleChange(e, 'contact2')} type="text" required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact2.relationship} onChange={(e) => this.handleChange(e, 'contact2')} required />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            Emergency Contact 3
                        <Col>
                                <Form.Control placeholder="Name" name='name' value={this.state.contact3.name} onChange={(e) => this.handleChange(e, 'contact3')} type="text" required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Phone Number" name='phoneNumber' value={this.state.contact3.phoneNumber} onChange={(e) => this.handleChange(e, 'contact3')} type="text" required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Relationship" name='relationship' value={this.state.contact3.relationship} onChange={(e) => this.handleChange(e, 'contact3')} type="text" required />
                            </Col>
                        </Form.Row>
                        <Button onClick={this.handleFormSubmit}>Submit</Button>
                    </Form>
                }
            </div>
        )
    }
}
