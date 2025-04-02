import React, { useState, useRef } from 'react';
import bottle from "../assets/bottle.jpeg";
import logo from "../assets/download.jpeg";
import { InnerImageZoom }from 'react-inner-image-zoom';
import Slider from 'react-slick';

function ProductZooms(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const ZoomSlider = useRef();
  const ZoomSliderBig = useRef();

  // Image array for dynamic rendering


  // Slider settings
  const setting = {
    dots: false,
    infinite: false,
    
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true
  };
  
  const setting2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  // Function to change active slide
  const goto = (index) => {
    setSlideIndex(index);
    ZoomSlider.current.slickGoTo(index);
    ZoomSliderBig.current.slickGoTo(index);
  };

  return (
    <div className="productZoom " style={{ position: "relative" }}>
      <div className="badge badge-primary ml-45">80%</div>

      {/* Big Image Zoom Slider */}
      <Slider {...setting2} className='zoomSliderBig flex items-center justify-center ml-37 ' ref={ZoomSliderBig}>
        { Array.isArray(props.images) &&
        props.images.map((image, index) => (
          <div key={index} className="item mt-2 ">
            <img className=' w-100' src={image} />
          </div>
        ))
        }
      </Slider>

      {/* Thumbnail Slider */}
      <Slider {...setting} className='zoomSliders ' ref={ZoomSlider}>
        { 
Array.isArray(props.images) &&
        props.images.map((image, index) => (
          <div key={index} className={` item ${slideIndex === index ? '' : ''}`} onClick={() => goto(index)}>
            <img src={image} className='ml-2' alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductZooms;
