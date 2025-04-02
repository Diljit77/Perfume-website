import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchDataFromApi } from '../utils/api';



const ProductGrid = () => {
  const [productdata, setProductData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
        fetchDataFromApi(`/api/product/`).then((res)=>{
            setProductData(res);
          //  console.log(productdata)
      
          })
          
      }, 3000);
    
     

   

})


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 products at a time
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Show 2 on tablets
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // Show 1 on mobile
    ],
  };

  return (
    <section className="product-grid-section">
      <div className="diagonal-line-accent mt-9"></div>
    
      {/* <div className="slider-wrap">
        <Slider >
        {...settings}
        </Slider>
      </div> */}
   
      <div className="slider-wrapper">
        <Slider      {...settings} >
         {
      productdata.length!==0 && productdata.map((products,index)=>{
return(
 <ProductCard products={products} key={index} />
)
      })
    }
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
        </Slider>
     
     
      </div>
    </section>
  );
};

export default ProductGrid;