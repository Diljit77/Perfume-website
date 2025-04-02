import logo from "../assets/download.jpeg"
import { FiHeart } from "react-icons/fi";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { FaShoppingCart } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import React, { useContext, useState } from "react";
import ProductZoom from "./ProductZoom";
import { Rating } from "@mui/material";

import { IoClose } from "react-icons/io5";
import { Mycontext } from "../App";
import { PostData } from "../utils/api";
import Quantitydrops from "./Quantitydrop";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function ProductModel(props) {
  const context=useContext(Mycontext);
  let [productQuantity,setproductQuantity]=useState(1)

  let [cart,setcart]=useState({})
  const addtocart=(data)=>{
    const user=JSON.parse(localStorage.getItem("user"));
  
      cart.productName=props.products.name,
      cart.images=props.products.images[0],
      cart.rating=props.products.rating,
      cart.price=props.products.price,
      cart.Quantiy=productQuantity,
      cart.subtotal=parseInt(props.products.price*productQuantity),
    cart.productId=props?.products._id,
    cart.userId=user?.userId
  
context.addtocart(cart)
console.log(cart)
 }
 const Quantity=(val)=>{
  setproductQuantity(val)
}

  function getOriginalPrice(discountedPrice, discountPercentage) {
    return Math.floor(discountedPrice / (1 - discountPercentage / 100));
}
const addtomyList=()=>{
  const user=JSON.parse(localStorage.getItem("user"));
  if(user){
    const data={
      productName:props?.products?.name,
      images:props.products?.images[0],
      rating:props?.products?.rating,
      price:props?.products?.price,
      productId:props.products._id,
      userId:user?.userId
    }
PostData("/api/wishlist/add",data).then((res)=>{
if(res.status===true){
 return context.setalertbox({
    msg:"Added Succesfully",
open:true,
error:false,

})
}else{
  context.setalertbox({
    msg:res.message,
open:true,
error:true,

})
}

})
  }else{
    context.setalertbox({
      msg:"please Login",
  open:true,
  error:true,
  
  })
  }

}


  return (
    <BootstrapDialog
           PaperProps={{
            sx: {
              backgroundColor: "#121212", // Dark background
              color: "#fff", // Light text
              borderRadius: "10px", // Optional rounded corners
              padding: "16px",
              width: "80vw",  // 80% of viewport width
              maxWidth: "900px",
            }
            
          }}
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <IoClose />
        </IconButton>
       <div className="produc">
<h1 className="gold">{props.products.name}</h1>
<p className="mb-2 flex items-center">
<b >Brand :</b>{props.products.brand} 
   
<Rating name="read-only" className="ml-3" value={props.products.rating} readOnly />
</p>
   
     <hr className="p"/>
          <div className="product-model flex">
            <div className="left-bar">
                <ProductZoom images={props.products.images} />
            </div>
            <div className="right-bar">
                <div className="flex items-center">
                <h2 className="gold" style={{fontSize:"20px"}}>₹{props.products.price}</h2>
                <h2 className="p original ml-1  " style={{fontSize:"20px"}}>₹{getOriginalPrice(props.products.price,props.products.discount)}</h2>
                </div>
           <p className="p">{props.products.description}</p>
           <div className="mt-7 flex gap-2">
           {
            props.products && props.products.sizes.map((item,index)=>{
              return(
                <span className="p-1 m-3 size" key={index}> {item.size}</span>
              )
            })
           }
            <Quantitydrops Quantity={Quantity} />
           </div>
        
           <div className="flex items-center model mt-6 gap-2">
          
           <button className='adds  flex items-center justify-center gap-1 cursor-pointer' onClick={addtocart} > <FaShoppingCart /> Add to Cart</button>

           <button className='ad flex items-center justify-center gap-1 cursor-pointer' onClick={addtomyList} ><FiHeart /> Add to wishlist</button>
           </div>
       
         
                   
            </div>
          </div>
          
   </div>
   
        {/* </DialogActions> */}
      </BootstrapDialog>
  )
}

export default ProductModel
