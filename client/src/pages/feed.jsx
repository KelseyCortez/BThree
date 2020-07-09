import React, { Component } from 'react'
import './feed.css'
import { Link } from 'react-router-dom';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="FeedPage">

                <header>
                    <div className="flexRow">
                        <h1> Feed </h1>
                        <div className="flexColumn quickLinks" >
                            <div className="AccountArea"> <Link to={{pathname: '/account'}}>  Account </Link> </div>
                            <div className="FriendsArea"> <Link> Friends </Link> </div>
                        </div>
                    </div>
                </header>

                <div className="flexRow spaceBetween end">  

                    {/* timeline of all notifications from friends and yourself */}
                    <div className="TimelineArea flexColumn"> 
                        Timeline 

                        <div className="TextArea"> </div>
                    
                    </div>


                    {/* Users can see their location and have the option to have it turned on or off */}
                    <div className="LocationArea">My location  </div>


                    {/* Users can see their messages from friends or admin within the app. also this is where they can send messages */}
                    <div className="ChatArea flexColumn"> 
                        Chat
                    
                        <div className="TextArea"> </div>
                     </div>

                </div>

                {/* Standard footer of any website including the copyright, link to the about page, and help */}
                <footer> 
                    link to about page copyright Help
                </footer>


            </div>

        );
    }
}

export default Feed;