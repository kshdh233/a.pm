import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "./images";
import { Link, useNavigate } from 'react-router-dom';



const Carousell = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const handleImageClick = (link) => {
    navigate(link);
  };
  const renderSlides = images.map((image, index) => (
    <div key={image.alt} className="flex justify-center items-center" onClick={() => handleImageClick(image.link)}>
    </div>
  ));

  return (
    <div className="flex justify-center items-center py-5 px-3">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Carousel
          width={'90vw'}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={images[currentIndex]}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;
