import React, { useState } from 'react';
import './Banner.css';

function Banner ( props ) {
    console.log('PROPS IN BANNER: ', props)
    
    let bannerImg = props.bannerImg;
    console.log('FINAL IMAGE: ', bannerImg)
    return(
        <div>
            {/* <img src={props.bannerImg} /> */}
            {/* <img src={'../../assets/inspo3.jpg'} /> */}
            <img  className='bannerMain' src={ require( './../../assets/inspo3.jpg')} />
            {/* Error: Cannot find module './../../assets/inspo3.jpg'
            <img  className='bannerMain' src={ require(bannerImg)} /> */}
            {/* <img
            <img src={"/images/resto.png"} />
            <img src={require('/images/image-name.png')} /> */}
            
            Banner
        </div>
    )
}

export default Banner;