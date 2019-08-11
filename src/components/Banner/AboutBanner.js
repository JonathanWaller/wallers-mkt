import React, { useState } from 'react';
import './Banner.css';

const AboutBanner = ( props ) => {
    return(
        <div>
            <img  className='bannerMain' src={ require( './../../assets/inspo3.jpg')} />
            Banner
        </div>
    )
}

export default AboutBanner;