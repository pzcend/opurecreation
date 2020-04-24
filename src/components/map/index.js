import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const MapContainer = (props) => {
  const onMarkerClick = (e) => {
    console.log(e)
  }
  return (
    <Map 
      google={props.google} 
      zoom={14}
      initialCenter={{
          lat: 45.708164,
          lng: -0.252557
      }}
    >

      <Marker onClick={onMarkerClick}
              name={'Current location'} />
    </Map>
  );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDM180qZny9gpwaYFHwKCq2-D4wgjr5mg')
})(MapContainer)
