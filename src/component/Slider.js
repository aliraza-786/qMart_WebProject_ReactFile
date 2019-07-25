// import React, { Component } from 'react';
// import { Slide } from 'react-slideshow-image';
import slider1 from './Images/slider1.jpg';
import slider2 from './Images/slider2.jpg';
import slider3 from './Images/slider3.jpg';

import back0 from './Images/back.jpg';
import back1 from './Images/back1.jpg';
import back2 from './Images/back3.jpg';
import martq from './Images/martq.jpg';
// import './Slider.css';

 
// const slideImages = [

//     back0,
//     back1,
//     back2
//     // slider1,
//     // slider2,
//     // slider3,
// ];
 
// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   // infinite: true,
//   // indicators: true,
//   arrows: true,
//   height:300,
// }

// export const Slideshow = () => {
    
//     return (
//       <div style={{}} >
//       <Slide {...properties}> 
//         <div className="each-slide" >
//           <div style={{'backgroundImage': `url(${slideImages[0] })`,}} >
//             {/* <span></span> */}
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//             {/* <span></span> */}
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//             <span></span>
//           </div>
//         </div>
//         {/* <div className="each-slide">
//           <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
//             <span></span>
//           </div>
//         </div> */}
//       </Slide>
//       </div>
//     )
// }

import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class slideshow extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slider1}
            alt="First slide" height= "600" 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide" height= "600"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back2}
            alt="Third slide" height= "600"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

// render(<slideshow />);
export default slideshow;