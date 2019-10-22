import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs( withGoogleMap( ( props ) => {
    const {
    isMarkerShown
    , googleMapURL
    , loadingElement
    , containerElement
    , mapElement
    , location
    } = props;
    
    const defaultOptions = {
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        draggableCursor: 'default',
        draggingCursor: 'move'
        , fullscreenControl: false
    }
    
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 38.306949, lng: -89.611585} }
            // defaultOptions={ defaultOptions }
        >
            <Marker position={{ lat: 38.306949, lng: -89.611585} } />    
        </GoogleMap>
    )
    
} ));

export default Map;