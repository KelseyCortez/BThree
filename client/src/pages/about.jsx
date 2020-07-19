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

                    <h2>  If a tree falls in the middle of the woods, and no one is around to hear it does it make a sound? </h2>
                   
                    <p>
                        No matter where you are  we want you to feel secure in knowing that you have the support of those closest to you. While our phones are great for giving us an expedient resource to reach out to nearly anyone, it has yet to provide us with true uniformity to send resourceful information to those around us in times of greatest concern. <br />
                        <br /> B3 is an abbreviation for the codename  “Bravo, Bravo, Bravo” which is a signal sent over passenger ship radio to alert crew to a fire or other serious incident on board without alarming passengers. Our team thought this would be a great name for our app because we wanted our users to have security in knowing that no matter where they are they can  keep those closest to them on alert without giving rise to a situation. We envisioned our app as kind of a standby for those situations between Immediate Danger and “just taking precaution”.
                      <br /> <br /> We want our users to be okay with adhering to caution without feeling uneasy with today's modern surveillance techniques. Here you decide what data you want to access and it only gets sent when you tell it to.
                    <br /> <br /> Our market audience is everyone. Many of our day to day operations
                whether it be going out for a jog, late night trips to the bank, leaving work, getting off the bus, phone battery dying, we are surrounded by people but unaware of anyone's attention. Many times an individual will feel rightfully weary about a situation but not want to be a bother to their friends or family because they hope for the best in the end. Our app allows for users to ...</p>
                    <p> Voice activated response
                    Preset phrases
                Auto record </p>


                </div>








            </div >


        );
    }
}

export default About;