/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, transitionDuration = 4000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the current image index to the next one
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, transitionDuration]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`slider-image ${
            index === currentImageIndex ? "active" : ""
          }`}
          style={{
            transition: `opacity ${transitionDuration / 2}ms ease-in-out`,
            transform: "rotate(3.46deg)",
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
