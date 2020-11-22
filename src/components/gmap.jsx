import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from '../assets/icon';



class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 43.821364,
      lng: -79.365837
    },
    zoom: 11
  };
  

//

  render() {
    //console.log('the google maps key:');
    //console.log(process.env.REACT_APP_GOOGLE_MAPS_API);
    
    const gmapKey1 = {
        key: process.env.REACT_APP_GOOGLE_MAPS_API
    };

    
    
    const newloc = {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lng)
    };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={gmapKey1}
          defaultCenter={newloc}
          defaultZoom={this.props.zoom}
        >
          <Icon
            lat={newloc.lat}
            lng={newloc.lng}
            text="Home"
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmap;