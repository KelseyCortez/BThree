import React, { Component } from 'react'
import './feed.css'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Timer from '../component/timer'
import PanicButton from '../component/PanicButton';
import EmergencyContacts1 from '../component/emergencyContacts';
import Map from '../component/Map'



class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Redirect: false,
            userName: "",
            mood: "",
            moodTitle: ""


        }
    }
    setMyMood = (e) => {
        e.preventDefault();
        this.setState({
            moodTitle: e.target.name,
            mood: e.target.value,
        })

    }
    componentDidMount = () => {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                console.log(data)
                if (data === 'Logged Out') {
                    this.setState({ Redirect: true })
                }
                else {
                    this.setState({ userName: data.firstName })
                }
            });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.Redirect ? <Redirect to='/login' /> : (
                    <div className="FeedPage">
                        <header>
                            <div className="titleDiv">
                                {/* <h1 style={{ marginTop: "20px", color: 'white', }}> Feed </h1> */}
                                <div className="greeting"> Welcome Back, {this.state.userName} </div>


                            </div>
                        </header>
                        <div className="flexRow ">
                            {/* timeline of all notifications from friends and yourself */}
                            <div className="FriendsArea">
                                <PanicButton />
                                <div className="Clock"> <div className="upsideDown1"> In </div> <div className="clockColumn"> <div> Be </div> <div className="time"> <Timer /> </div> <div> Back </div> </div> <div className="upsideDown2"> Right </div> </div>

                                <div className="MoodArea">
                                    <div> #MAJOR MOODZ </div>
                                    <br />
                                    <div>
                                        <button onClick={this.setMyMood} value="Happy" name="&#128512; "> &#128512; </button>
                                        <button onClick={this.setMyMood} value="Weary" name="&#128528; "> &#128528; </button>
                                        <button onClick={this.setMyMood} value="silly" name="&#128541;">&#128541; </button>
                                    </div>
                                    <div>
                                        <button onClick={this.setMyMood} value="Love" name="&#128525;"> &#128525;</button>
                                        {/* <button value="Nervous"> & </button> */}
                                        <button onClick={this.setMyMood} value="Sad" name="&#128532;"> &#128532; </button>
                                        <button onClick={this.setMyMood} value="Angry" name="&#128545;"> &#128545; </button>
                                    </div>
                                </div>
                                <br />
                                Today I am Feeling: {this.state.moodTitle} {this.state.mood}
                            </div>

                            {/* Users can see their location and have the option to have it turned on or off */}
                            <div className="LocationArea"> 👇 You are here  👇
                                <div className="theMap">   <Map /> </div>


                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default Feed;
