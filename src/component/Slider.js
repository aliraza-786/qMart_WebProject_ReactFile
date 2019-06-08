
import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import slider1 from './Images/slider1.jpg';
import slider2 from './Images/slider2.jpg';
import slider3 from './Images/slider3.jpg';
// import slider1 from './Images/mart.jpg';


import slider10 from './Images/slider10.jpg';
import slider11 from './Images/qmartramzan.jpg';
import './Slider.css';

 
const slideImages = [
//   'images/slider1.jpg',
  // 'images/slider2.jpg',
  // 'images/slider3.jpg'
    slider1,
    slider2,
    // slider11,
    slider3,
    // slider10,
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
}

export const Slideshow = () => {
    
    return (
      <div style={{}} >
      <Slide {...properties}> 
        <div className="each-slide" >
          <div style={{'backgroundImage': `url(${slideImages[0] })`,}} id="sliderimg">
            {/* <span></span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            {/* <span></span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span></span>
          </div>
        </div>
        {/* <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <span></span>
          </div>
        </div> */}
      </Slide>
      </div>
    )
}
