import React, { Component } from 'react'
import { location } from './redux/actions'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentLocation: {
                lat: -34.397,
                lng: 150.644
            }
        }
    }
    componentDidMount() {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
              const coords = pos.coords;
              this.props.location(coords)
              this.setState({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude,
                },
              });
            });
          }
      }
    render() {
        return (
            <div>
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                    center = {this.state.currentLocation}
                >
                    <Marker position={this.state.currentLocation} />
                </GoogleMap>
            </div>
        )
    }
}
const ConnectedMap = withScriptjs(withGoogleMap(Map))

ConnectedMap.defaultProps = {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDxROfIdfYc0N-2CD4VIzcPyeZ9pivQ5Xc",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}

const mapStateToProps = (state) => {
    return {
        latitude: state.latitude,
        longitude: state.longitude
    }
}

const mapDispatchToProps = {
    location
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMap);
