import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './styles.css'
const slideImages = [
  'https://i.pinimg.com/originals/51/9b/b1/519bb1ba3c9143d8a9fb3803786f393e.jpg',
  'https://magazine.wharton.upenn.edu/wp-content/uploads/2019/09/ThinkstockPhotos-504446412.jpg',
  'https://www.kevinmd.com/blog/wp-content/uploads/shutterstock_48561808.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
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
      </div>
    )
};

export default Slideshow;