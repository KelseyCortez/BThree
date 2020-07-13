import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <form style={{width: '30%', margin: '40px auto'}}>
                <h3 style={registerColor}>Sign Up</h3>

                <div className="form-group" style={registerColor}>
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group" style={registerColor}>
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group" style={registerColor}>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={registerColor}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group" style={registerColor}>
                    <label>Telephone Number</label>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right" style={registerColor}>
                    Already registered? <Link to={'/login'}>Sign in</Link>
                </p>
            </form>
        );
    }
}

export default Register;

const registerColor = {
    color: 'white'
}