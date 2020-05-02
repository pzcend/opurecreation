import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const MapContainer = (props) => {
  const onMarkerClick = (e) => {
    console.log(e)
  }
  return (
    <Map 
      google={props.google} 
      zoom={11}
      initialCenter={{
          lat: 45.708164,
          lng: -0.252557
      }}
    >

      <Marker onClick={onMarkerClick}
              name={'O Pure Création'} />
    </Map>
  );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCljLw0rLe6OK-TuWIfSxYIT6BeVK_M6y8')
})(MapContainer)
