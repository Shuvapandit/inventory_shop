import React, { useState, useEffect } from "react";
/* import img1 from "../../../assets/images/slidersimg/img1.jpg"; */
import img2 from "../../../assets/images/slidersimg/img2.jpg";
import img3 from "../../../assets/images/slidersimg/img3.jpg";
import img4 from "../../../assets/images/slidersimg/img4.jpg";
/* import img5 from "../../../assets/images/slidersimg/img5.jpg"; */
import img6 from "../../../assets/images/slidersimg/img6.jpg";

const Slider = () => {
  const images = [ img2, img3, img4, img6];
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(goToNext, 2500);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [activeIndex]);

  return (
    <div>
      <div className="carousel w-full h-64 ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full h-64 ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              className="w-full h-64 "
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${
                  ((index - 1 + images.length) % images.length) + 1
                }`}
                className="btn btn-link"
                onClick={goToPrevious}
              >
                ❮
              </a>
              <a
                href={`#slide${((index + 1) % images.length) + 1}`}
                className="btn btn-link "
                onClick={goToNext}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
