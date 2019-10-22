import React, { useState } from 'react';
// import Banner from '../Banner/Banner';
import ContactBanner from '../Banner/ContactBanner';
import Map from '../Map/Map';

const Contact = () => {
    
    const googleKey= process.env.REACT_APP_GOOGLE_KEY;
    const googleURL = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&v=3.exp&libraries=geometry,drawing,places`
    
    return(
        <div>
            {/* <Banner/> */}
            <ContactBanner />
            Contact
            <Map
                isMarkerShown={false}
                googleMapURL={ googleURL }
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div id="map-container" style={{ height: `200px`, width: '300px' }} />}
                mapElement={<div style={{ height: `100%` }} />}
                // location = { findLocationLatLng( opFormCompletedInfo.businesscontactId) }
            />
        </div>
    )
}

export default Contact;