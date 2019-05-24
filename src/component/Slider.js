import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import slider1 from './Images/slider1.jpg';
import slider2 from './Images/slider2.jpg';
import slider3 from './Images/slider3.jpg';
import './Slider.css';

 
const slideImages = [
//   'images/slider1.jpg',
//   'images/slider2.jpg',
//   'images/slider3.jpg'
    slider1,
    slider2,
    slider3,
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
}
// class Slideshow extends Component{
//     render(){
//         return(
export const Slideshow = () => {
    
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span></span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span></span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span></span>
          </div>
        </div>
      </Slide>
    )
}
// )
// }
// }
// export default Slideshow;
