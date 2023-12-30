import React, { useState } from 'react';
import "../css/Slider.css";

const CustomSlider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide >= children.length ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide < 0 ? children.length - 1 : currentSlide - 1);
  };

  return (
    <div className="custom-slider">
      <div className="slider-container">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {children.map((child, index) => (
            <div key={index} className="slide">
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className="prev-btn" onClick={prevSlide}>&larr;</button>
      <button className="next-btn" onClick={nextSlide}>&rarr;</button>
    </div>
  );
};

export default CustomSlider;
