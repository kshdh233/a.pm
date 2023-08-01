import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "./images";
import { Link } from 'react-router-dom';

const renderSlides = images.map(image => (
  <div key={image.alt} className="flex justify-center items-center">
    <img src={image.url} alt={image.alt} />
  </div>
));

const Carousell = () => {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="flex justify-center items-center py-5 px-3">
      <Link to="/Play_information_page">
      <div style={{ maxHeight: '50vh' /* Set the desired max height here */ }}>
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={images[currentIndex]}
          onChange={handleChange}
          className="w-[400px] lg:hidden"
        >
          {renderSlides}
        </Carousel>
      </div>
      </Link>
    </div>
  );
};

export default Carousell;
