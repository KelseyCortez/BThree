import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';


export default class Contacts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            phoneNumber: '',
            relationship: ''
        }
    }
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        fetch('/api/v1/user/contacts/new',
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

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    
    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                <Form.Row>
                Emergency Contact 1 <Col>
                          <Form.Control placeholder="name" name="name" defaultValue={this.state.name} onChange={this.handleChange} type="text"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number " name="num" defautValue={this.state.phoneNumber} onChange={this.handleChange} type="text"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name="rel" defaultValue={this.state.relationship} onChange={this.handleChange} type="text" />
                        </Col>
                        </Form.Row>
                    {/* <Form.Row>
                    Emergency Contact 2
                        <Col>
                            <Form.Control placeholder="Name" name="name" defaultValue={this.state.name} onChange={this.handleChange} type="text"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number" name="num" defaultValue={this.state.phoneNumber} onChange={this.handleChange} type="text"/>
                        </Col>
                        <Col>
                            <Form.Control name="rel" placeholder="Relationship" />
                        </Col>
                        </Form.Row>
                    <Form.Row>
                    Emergency Contact 3
                        <Col>
                            <Form.Control placeholder="Name" name="name" defaultValue={this.state.name} onChange={this.handleChange} type="text"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone Number" name="num" defaultValue={this.state.phoneNumber} onChange={this.handleChange} type="text" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Relationship" name="rel" defaultValue={this.state.relationship} onChange={this.handleChange} type="text"/>
                        </Col>

                    </Form.Row> */}
                    <Button onSubmit={this.handleFormSubmit} type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
