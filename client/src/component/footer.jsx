import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <footer>
                  <span className="aboutLink">  <Link to="/about"> About </Link> </span> @copyright2020 <span className="helpLink"> <Link to="/"> Help </Link> </span> 
                </footer>
            </div>
        );
    }
}

export default Footer;