import React, { Component } from 'react'
import './feed.css'


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
                            <div className="AccountArea"> Account </div>
                            <div className="FriendsArea"> Friends </div>
                        </div>
                    </div>

                </header>

                <div className="flexRow spaceBetween end">
                    <div className="ChatArea"> Chat </div>



                    <div className="LocationArea">My location  </div>



                    <div className="NotificationsArea">Notifications </div>

                </div>



            </div>

        );
    }
}

export default Feed;