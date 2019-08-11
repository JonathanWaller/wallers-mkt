import React, { useState } from 'react';
import './Banner.css';

const Banner = ( props ) => {
    console.log('PROPS IN BANNER: ', props)
    
    const bannerImg = require( props.bannerImg );
    console.log('plz: ', props)
    // const bannerImg = require( './../../assets/inspo3.jpg');
    // console.log('FINAL IMAGE: ', bannerImg)
    return(
        <div>
            {/* <img  className='bannerMain' src={ require( './../../assets/inspo3.jpg')} /> */}
            {/* <img  className='bannerMain' src={ bannerImg } /> */}
            {/* <img src={"/images/resto.png"} />
            <img src={require('/images/image-name.png')} /> */} */}
            <img src={require( `${ props.bannerImg }` )} />
            
            Banner
            {/* <img src={require( `${ props.imageSource }` )} alt={props.imageAlt} /> */}
        </div>
    )
}

export default Banner;
