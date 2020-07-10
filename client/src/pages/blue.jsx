import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button' 
import {formik} from 'formik' 
import * as Yup from "yup"

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
        e.preventDefault() ;
        fetch('/api/v1/users', 
        { 
            method: 'POST', 
            body: JSON.stringify(this.state),

            })

        } 
   
   
    myChangeHandler = (event) => { 
        this.setState({ 
            username: event.target.username,
            password: event.target.password
        })
    }
    render() { 
        return (
            <div className="LoginPage">
                <h1> Login </h1>
                {/* <!-- form for user login  --> */}
                <form method="POST" onSubmit ={this.authorizeLogin} >

                    {/* <!-- input field for Username --> */}
                    <label>
                        Username:
                         <input name="username" type="text" onChange={this.myChangeHandler} />
                    </label> <br />

                    {/* <!-- input field for Password --> */}
                    <label>
                        Password:
                        <input name="password" type="password" onChange={this.myChangeHandler} />
                    </label> <br />


                    {/* <!-- forgot password link --> */}
                    <a href="/">Forgot Password? </a>

                    <Button  type="submit" > Login</Button>






                </form>



            </div>


        );
    }
}

export default Login;