import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="LoginPage">
                <h1> Login </h1>


                {/* <!-- form for user login  --> */}
                <form>

                    {/* <!-- input field for Username --> */}
                    <label>
                        Username:
                         <input type="text" />
                    </label> <br />

                    {/* <!-- input field for Password --> */}
                    <label>
                        Password:
                        <input type="password" />
                    </label> <br />


                    {/* <!-- forgot password link --> */}
                    <a href="/">Forgot Password? </a>








                </form>



            </div>


        );
    }
}

export default Login;