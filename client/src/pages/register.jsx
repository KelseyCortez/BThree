import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './pages.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            dob: "",
            phrase: "",
            text: ""
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/register',
            {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            })
            .then(() => {
                this.props.setLoggedIn('logged in')
                this.props.history.push('/contacts')
            })

    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="RegisterPage" style={{fontFamily: 'Montserrat'}}>

                <h3 style={registerColor}>Sign Up</h3>
                {/*  start of form for user registration   */}

                <form method="POST" onSubmit={this.handleFormSubmit} style={{ width: '30%', margin: '40px auto' }}>

                    {/* input field for  first name   */}
                    <div className="form-group" style={registerColor}>
                        <label >
                            First Name:
                        <input className="form-control" placeholder="First name" name="firstName" value={this.state.firstName} onChange={this.handleChange} type="text" />
                        </label> <br />
                    </div>

                    {/* input field for  last name   */}
                    <div className="form-group" style={registerColor}>
                        <label >
                            Last Name:
                        <input className="form-control" placeholder="Last name" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </label> <br />
                    </div>

                    {/* <!-- input field for Username --> */}
                    <div className="form-group" style={registerColor}>
                        <label >
                            Username:
                        <input className="form-control" placeholder="Username" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                        </label> <br />
                    </div>
                    {/* <!-- input field for Password --> */}
                    <div className="form-group" style={registerColor}>
                        <label >
                            Password:
                        <input className="form-control" placeholder="Enter password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label> <br />
                    </div>
                    {/* <!-- input field for Email --> */}
                    <div className="form-group" style={registerColor}>
                        <label >
                            Email:
                        <input className="form-control" placeholder="Enter Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label> <br />
                    </div>
                    <div className="form-group" style={registerColor}>
                        <label >
                            Date of Birth:
                        <input type="date" className="form-control" name="dob" value={this.state.dob} onChange={this.handleChange} />
                        </label> <br />
                    </div>
                    <div className="form-group" style={registerColor}>
                        <label >
                            Safe Phrase:
                        <input type="text" className="form-control" name="phrase" value={this.state.phrase} onChange={this.handleChange} />
                        </label> <br />
                    </div>
                    <div className="form-group" style={registerColor}>
                        <label >
                            Text Message:
                        <input type="text" className="form-control" name="text" value={this.state.text} onChange={this.handleChange} />
                        </label> <br />
                    </div>

                    <Button className="btn btn-primary btn-block" onSubmit={this.handleFormSubmit} type="submit"> Sign Up</Button>
                </form>
                <p className="forgot-password text-right" style={registerColor} style={{ padding: '20px'}}>
                Already registered? <Link to={'/login'}>Sign in</Link>
                </p>
                {/* end of registration form */}
            </div >
        );
    }
}



export default withRouter(Register);

const registerColor = {
    color: 'white'
}

