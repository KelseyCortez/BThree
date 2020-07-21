import React, { Component } from 'react';
import './about.css'
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="AboutPage">
                <div className="theParagraphs">

                    <h2>  If a tree falls in the middle of the woods, and no one is around to hear it, does it make a sound? </h2>

                    <p>
                        No matter where you are, we want you to feel secure in knowing that you have the support of those closest to you. While our phones are great for giving us an expedient resource to reach out to nearly anyone, B3 takes your contacts, your message, and your custom phrase that activates your people to know where you are when you aren't feeling so secure. <br />
                        <br /> B3 is an abbreviation for the codename,  “Bravo, Bravo, Bravo” which is a signal sent over passenger ship radios to alert crew to a serious incident on board without alarming passengers. Our team envisioned this app as a preliminary warning for those situations that fall between immediate danger and feeling something is off in their current environment.
                      <br /> <br /> Our objective is for users to feel safe adhering to caution with ease. You decide what data you want to access and it only gets sent on your custom command.
                    <br /> <br /> B3 is for everyone. Using voice activated response, simply choose a unique phrase, customize your automated text message, and choose your contacts. Using B3 when you're safe allows safety to be just a phrase or click away when you're not.</p>
                    </div>
            </div>






        );
    }
}

export default About;