import React, { useState, useRef } from 'react';
import bottle from "../assets/bottle.jpeg";
import logo from "../assets/download.jpeg";
import { InnerImageZoom }from 'react-inner-image-zoom';
import Slider from 'react-slick';

function ProductZoom(props) {
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
      <div className="badge badge-primary ml-auto">80%</div>

      {/* Big Image Zoom Slider */}
      <Slider {...setting2} className='zoomSliderBig ' ref={ZoomSliderBig}>
        { Array.isArray(props.images) &&
        props.images.map((image, index) => (
          <div key={index} className="item mt-2">
            <img className='IMGS w-100' src={image} />
          </div>
        ))
        }
      </Slider>

      {/* Thumbnail Slider */}
      <Slider {...setting} className='zoomSlider flex gap-2' ref={ZoomSlider}>
        { 
Array.isArray(props.images) &&
        props.images.map((image, index) => (
          <div key={index} className={` ml-2 item ${slideIndex === index ? 'item_active' : ''}`} onClick={() => goto(index)}>
            <img src={image} className='ml-2' alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductZoom;
