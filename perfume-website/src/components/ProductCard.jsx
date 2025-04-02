// import React from 'react';
import logo from "../assets/download.jpeg"
import { FiHeart } from "react-icons/fi";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import React, { useContext, useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import ProductModel from "./ProductModel";
import { PostData } from "../utils/api";
import { Mycontext } from "../App";

const ProductCard = (props) => {
  const context=useContext(Mycontext);
  const [open, setOpen] = React.useState(false);
  const [inmylist,setinmylist]=useState(false);
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
    if(!res){
      return context.setalertbox({
        msg:"already added",
    open:true,
    error:false,
    
    })
    }
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function getOriginalPrice(discountedPrice, discountPercentage) {
    return Math.floor(discountedPrice / (1 - discountPercentage / 100));
}
  return (
    <div className="product-card">
      <span className="discount-badge">{props.products.discount}%</span>

      <button className="favorite-btn" onClick={handleClickOpen}><AiOutlineFullscreen /></button>
      <button className="favorite-btn2" onClick={addtomyList}>
        <FiHeart /></button>

      <img src={props.products.images[0]} alt={"h"} className="product-image" />

      <div className="product-info">
        <h3 className="product-title">{props.products.name}</h3>
        <p className="product-subtitle">{props.products.brand}</p>
        <Rating className="m-0" name="read-only" readOnly value={props.products.rating} precision={0.5}  size="small" />
        <div className="price-section">
          <div>
          <span className="discounted-price">₹{props.products.price}</span>
          <span className="original-price">₹{getOriginalPrice(props.products.price,props.products.discount)}</span>
          </div>
         <div>
          <a href={`/selectedproduct/${props.products._id}`}>
         <button className="buy-btn">→</button>
         </a>
         </div>
        </div>
      
       
      </div>
      {
        open===true && <ProductModel handleClose={handleClose} products={props.products} />
      }
      {/* <BootstrapDialog
           PaperProps={{
            sx: {
              backgroundColor: "#121212", // Dark background
              color: "#fff", // Light text
              borderRadius: "10px", // Optional rounded corners
              padding: "16px"
            }
          }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <IoClose />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog> */}
    </div>
  );
};

export default ProductCard;

