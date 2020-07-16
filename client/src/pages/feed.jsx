import React, { Component } from 'react'
import './feed.css'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


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
                <div>
                    <header>
                        <div className="flexRow">
                            <h1 style={{ margin: '10px auto', width: '100px', color: 'white' }}> Feed </h1>
                        </div>
                    </header>

                    <div className="flexRow spaceBetween end">

                        {/* timeline of all notifications from friends and yourself */}
                        <div className="FriendsArea">
                            Friends <hr />
                            <PanicButton />
                        </div>

                        {/* Users can see their location and have the option to have it turned on or off */}

                        <div className="LocationArea"> Location <hr />
                            <MapContainer />
                        </div>
                    </div>

                    <footer>
                        link to about page copyright Help
                </footer>
                </div>
                )}
            </div>
        );
    }
}


export default Feed;
