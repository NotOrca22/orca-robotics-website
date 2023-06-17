import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageSlider = ({ slides, shouldRender }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!shouldRender) {
    return null;
  } else {
    return (
      <section className="slider">
        {/* Left arrow */}
        <FaArrowAltCircleLeft className="arrow left-arrow" onClick={previousSlide} />

        {/* Slide images */}
        {slides.map((slide, index) => (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <img src={slide.image} alt="orca" className="image" />
            )}
          </div>
        ))}

        {/* Right arrow */}
        <FaArrowAltCircleRight className="arrow right-arrow" onClick={nextSlide} />
      </section>
    );
  }
};

export default ImageSlider;
