import React, { Component } from 'react'
import './feed.css'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom' 
import Timer from '../component/timer'


import PanicButton from '../component/PanicButton';
import MapContainer from '../component/MapContainer';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Redirect: false
        }
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
            });
    }
    render() {
        return (
            <div>
                {this.state.Redirect ? <Redirect to='/login' /> : (
                <div className="FeedPage">
                    <header>
                        <div className="titleDiv">
                            <h1 style={{ margin: '10px auto', color: 'white' }}> Feed </h1>
                        </div>
                    </header>

                    <div className="flexRow ">

                        {/* timeline of all notifications from friends and yourself */}
                        <div className="FriendsArea">
                           
                            <PanicButton />  
                         <div className="Clock"> <div className="upsideDown1"> In </div> <div className="clockColumn"> <div> Be </div> <div className="time"> <Timer/> </div> <div> Back </div> </div> <div className="upsideDown2"> Right </div> </div>
                            Friends <hr /> 

                        </div>

                        {/* Users can see their location and have the option to have it turned on or off */}

                        <div className="LocationArea"> Location 
                          <div className="theMap">   <MapContainer /> </div>
                        </div>
                    </div>

                
                </div>
                )}
            </div>
        );
    }
}


export default Feed;
