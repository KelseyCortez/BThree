import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="RegisterPage"> 

            <h1> Create an Account </h1> 


           {/* form for user registration   */}
                <form>
            
            {/* input field for Name   */}
                    <label>
                        Name:
                        <input type="text" />
                    </label> <br/> 
            
            {/* <!-- input field for Username --> */}
                    <label>
                        Username:
                        <input type="text" />
                    </label> <br/> 
            
            {/* <!-- input field for Password --> */}
                    <label>
                        Password:
                        <input type="password" />
                    </label> <br/>  
            
            
            {/* <!-- input field for Email --> */}
                    <label>
                        Email:
                        <input type="email" />
                    </label> <br/> 
            
            
            {/* <!-- input field for Cell Phone Number --> */}
                    <label>
                        Telephone Number:
                        <input type="number" />
                    </label> <br/> 
            
            
            
            
            
            
            
                </form> 

                </div>
            

          );
    }
}
 
export default Register;