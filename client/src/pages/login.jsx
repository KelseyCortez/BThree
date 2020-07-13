
import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button' 
import axios from 'axios'  
import {Redirect} from 'react-router-dom'




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "", 
            password: "", 
            redirect: ""
        } 
        this.authorizeLogin = this.authorizeLogin.bind(this) 
       
    } 
    authorizeLogin = (e) => {  
        e.preventDefault() ; 
        axios.post('/api/v1/login', { 
            ...this.state
        }) 


        // the axios comparison of the line above 
        
        // fetch('/api/v1/login', 
        // { 
        //     method: 'POST', 
        //     body: JSON.stringify(this.state), 
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8'
        //       },

        //     }) 

            .then((response)=>  { 
               this.setState({redirect: `/users/${response.data.id}`})})
            .catch(err => { 
                console.log(err); 

                alert('Error logging in please try again')
            })

    }

    render() { 
        return (
            <div className="LoginPage"> 
            {this.state.redirect && <Redirect to={this.state.redirect} /> }
                <h1> Login </h1>
                {/* <!-- form for user login  --> */}
                <form  >

                    {/* <!-- input field for Username --> */}
                    <label>
                        Username:
                         <input name="username" type="text" onChange={this.myChangeHandler} value={this.state.username} />
                    </label> <br />

                    {/* <!-- input field for Password --> */}
                    <label>
                        Password:
                        <input name="password" type="password" onChange={this.myChangeHandler} value={this.state.password} />
                    </label> <br />


                    {/* <!-- forgot password link --> */}
                    <a href="/">Forgot Password? </a>

                    <Button onClick={this.authorizeLogin}  > Login</Button>






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
