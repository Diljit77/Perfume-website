import React, { useContext, useEffect, useState } from "react";

import Subheader from "../components/Subheader";

import Rating from '@mui/material/Rating';
import Reviewsection from "../components/Reviewsection";
import Footer from "../components/Footer";
import { fetchDataFromApi } from "../utils/api";
import { Mycontext } from "../App";
import { useParams } from "react-router-dom";
import ProductZooms from "../components/Productzooms";
import Quantitydrops from "../components/Quantitydrop";

const ProductDetail = () => {
  const [productdata,setproductdata]=useState([])
  const context=useContext(Mycontext);
  let [productQuantity,setproductQuantity]=useState(1)
  let [cart,setcart]=useState({})
  const Quantity=(val)=>{
    setproductQuantity(val)
}
  const addtocart=(data)=>{
    const user=JSON.parse(localStorage.getItem("user"));
  
      cart.productName=productdata.name,
      cart.images=productdata.images[0],
      cart.rating=productdata.rating,
      cart.price=productdata.price,
      cart.Quantiy=productQuantity,
      cart.subtotal=parseInt(productdata.price*productQuantity),
    cart.productId=productdata._id,
    cart.userId=user?.userId
  
context.addtocart(cart)
console.log(cart)
 }
  const {id}=useParams();
  useEffect(() => {
    setTimeout(() => {
        fetchDataFromApi(`/api/product/${id}`).then((res)=>{
            setproductdata(res);
             }).catch((err)=>console.log(err))
      }, 1000);
      // setTimeout(() => {
      //   fetchDataFromApi(`/api/review?productId=${id}`).then((res)=>{
      //       setReviewData(res)
      //   })
      // }, 3000);
 
     

  
})
function getOriginalPrice(discountedPrice, discountPercentage) {
  return Math.floor(discountedPrice / (1 - discountPercentage / 100));
}
  return (
    <>
    <Subheader />
    <div className="container mt-8">
      <div className="productdetail flex " style={{width:"100%"}}>
      
    <ProductZooms images={productdata.images}  />
    
     <div className="detail-section flex flex-col" style={{width:"50%"}}>
     <h1 className="gold">{productdata?.name}</h1>
     <div className="flex items-center">
 <Rating readOnly value={productdata.rating} size="small" />
 <p className="gold m-2">({productdata.numReviews}) Reviews</p>

  
     </div>
     <div className="flex items-center">
     <h1 className="gold">₹{productdata.price}</h1>
     <h1 className="p original m-3">₹{getOriginalPrice(productdata.price,productdata.discount)}</h1>
     </div>
<p>{productdata?.description}</p>
<div className="flex items-center mt-4">
  <p>Size :</p>
  <span className="p-2 m-3 active size"> 30mL</span>
  <span className="p-2  size m-3">50mL</span>
  <span className="p-2 size m-3">75mL</span>
  <span className="p-2  size m-3">100mL</span>
</div>
<div className="flex mt-4 mb-5">
  <Quantitydrops Quantity={Quantity}   />
</div>
<div className="flex buttons items-center">
<button className=" addtocart " onClick={addtocart}>Add to cart</button>
<button className="buynow ml-4">Buy Now</button>
</div>


     </div>
      </div>
      <div className="review " style={{width:"100%"}}>
      
      
        <Reviewsection />
      </div>

<hr className="p m-5" />

<Footer />

    </div>

  
    </>
  );
};

export default ProductDetail;

