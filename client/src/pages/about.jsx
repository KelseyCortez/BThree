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
            <div className="AboutPage flexColumn  alignCenter spaceAround">

                <header>
                    <div className="flexRow">
                        <h1> About </h1>
                        <div className="flexColumn quickLinks" >
                            <div className="AccountArea"> <Link to={{ pathname: '/account' }}>  Account </Link> </div>
                            <div className="FriendsArea"> <Link> Friends </Link> </div>
                        </div>
                    </div>
                </header>


                <div className="flexColumn alignCenter">
                    <div className="flexColumn alignCenterItems">
                        <div className="SectionTitle"> Who  </div>
                        <p>Group of 5 software engineers</p>
                    </div>

                    <div className="flexColumn alignCenterItems ">
                        <div className="SectionTitle"> What </div>
                        <p> Seeking to create an application that can make your emergency contacts readily available </p>
                    </div>

                    <div className=" flexColumn alignCenterItems ">
                        <div className="SectionTitle"> Why  </div>
                        <p>  Discrete way of having access to your contacts without having to fumble through phone in time of distress
                        Gives the option of sharing your location to those close to you without actively sharing it all the time in
                    the event of distress </p>

                    </div>

                    <div className="flexColumn alignCenterItems ">
                        <div className="SectionTitle"> How  </div>
                        <p> Voice activated response
                        Preset phrases
                        Auto record </p>

                    </div>


                </div>





             Hello, Thanks so much for stopping by.B3 is an app developed by 5 software developers in order to provide users with
             around the clock support from their trusted peers.In many emergency situations, individuals cannot easily alert their
        loved ones until it is too late or their loved ones have been contacted by an Emergency service(like firefighters, paramedics,
            police, etc.).There are also plenty of situations where our phone battery is low and there isn't much time to access our contacts
        and share our location.

            </div >


        );
    }
}

export default About;