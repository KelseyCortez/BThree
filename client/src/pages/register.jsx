import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            dob: ""
        } 
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit = (e) => {
        e.preventDefault(); 
        console.log("blue") 
        console.log(this.state)
        fetch('/api/v1/register', 
        {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(res => res.json())
            // .then(data => {
            //     this.props.history.push(`/register/${data.id}`);
            // })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value ,
        });
    }
    render() {
        return (
            <div className="RegisterPage">

                <h1> Create an Account </h1>


                {/*  start of form for user registration   */}

                <form method="POST" onSubmit={this.handleFormSubmit}>

                    {/* input field for  first name   */} 
                    <label >
                        First Name:
                        <input name="firstName" value={this.state.firstName} onChange={this.handleChange} type="text" />
                    </label> <br />

                    {/* input field for  last name   */}
                    <label >
                        Last Name:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label> <br />

                    {/* <!-- input field for Username --> */}
                    <label >
                        Username:
                        <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                    </label> <br />

                    {/* <!-- input field for Password --> */}
                    <label >
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label> <br />


                    {/* <!-- input field for Email --> */}
                    <label >
                        Email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label> <br />

                    <label >
                        Date of Birth:
                        <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} />
                    </label> <br />


                    {/* <!-- input field for Cell Phone Number --> */}
                    {/* <label name="" value={this.state. }>
                        Telephone Number:
                        <input type="number" />
                    </label> <br /> */}




                    <Button onSubmit={this.handleFormSubmit} type="submit"> Register </Button>

                    {/* end of registration form */}
                </form>

            </div>



        );
    }
}

export default Register;

const registerColor = {
    color: 'white'
}

