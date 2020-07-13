import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Register from './register'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.authorizeLogin = this.authorizeLogin.bind(this)
    }
    authorizeLogin = (e) => {
        e.preventDefault();
        fetch('/api/v1/login',
            {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },

            })
            .catch(err => {
                console.log(err);
                alert('Error logging in please try again')
            })

    }


    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        })
    }
    render() {
        
        return (
            <form method="POST" onSubmit={this.authorizeLogin} style={{width: '30%', margin: '40px auto'}}>
                <h3 style={loginColor}>Sign In</h3>
        
                <div className="form-group" style={loginColor}>
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" onChange={this.myChangeHandler} value={this.state.username} />
                </div>
        
                <div className="form-group" style={loginColor}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  onChange={this.myChangeHandler} value={this.state.password} />
                </div>
        
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                </p>

                <p style={loginColor}><Link to={'/register'}>Not signed up? Register here</Link></p>
            </form>
        );
    }
}

export default Login;


const loginColor = {
    color: 'white'
}
