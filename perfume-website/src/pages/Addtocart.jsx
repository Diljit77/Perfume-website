import React, { useEffect, useState } from 'react'
import Subheader from '../components/Subheader'
import logo from "../assets/download.jpeg"
import Footer from '../components/Footer'
import { MdDeleteOutline } from "react-icons/md";
import { deleteData, editData, fetchDataFromApi } from '../utils/api';
import QuantityDrop from '../components/Quantitycontrol';
import { Rating } from '@mui/material';
function Addtocart() {
  const [changeQuantity,setchangeQuantity]=useState(0)
  const [productQuantity,setproductQuantity]=useState();
  const [updateQuantity,setupdateQuantity]=useState(0)
  const [cartfielddata,setcartfielddata]=useState({})
  const selecteditem=(item,val)=>{
    if(changeQuantity!==0){
        const user=JSON.parse(localStorage.getItem("user"));
      
     
       
  cartfielddata.productName=item?.productName,
cartfielddata.images=item?.images,
cartfielddata.rating=item?.rating,
cartfielddata.price=item?.price,
cartfielddata.Quantiy=val,
cartfielddata.subtotal=parseInt(item?.price*val),
cartfielddata.productId=item?.productId,
cartfielddata.userId=user?.userId
editData(`/api/cart/${item?._id}`,cartfielddata).then()
.catch(err=>console.log(err))
    }
    setupdateQuantity(val)
  //  console.log(val)
//console.log(item)






   }

  const [cartdata,setcartdata]=useState([]);
  useEffect(()=>{
    setTimeout(() => {
      const user=JSON.parse(localStorage.getItem("user"));
      const userId=user?.userId
      fetchDataFromApi(`/api/cart?userId=${userId}`).then((res)=>{
        console.log(res)
        setcartdata(res)
      })
    }, 1000);
   
  })
  const Quantity=(val)=>{
    setproductQuantity(val)
    
 setchangeQuantity(val)

  
}


  const deltecart=(id)=>{
    deleteData(`/api/cart/${id}`).then((res)=>{
        context.setalertbox({
            msg:"Item removed from cart",
       open:true,
       error:false,
    
     })
     fetchDataFromApi("/api/cart").then((res)=>{
        setcartdata(res);
      
    
    })
    
    }).catch((err)=>{
        context.setalertbox({
            msg:"Somehting went wrong",
       open:true,
       error:true,
    
     })
    })
    }
    
  return (
 <div className="">
    <Subheader />
 
        <div className="cart-container ">
      <h1 className="gold">MY SHOPPING BAG</h1>
      <div className="cart-content">
        <div className="cart-items">
          { cartdata.length!==0 &&
           cartdata.map((item,index)=>{
              return (
                <>
           
                <div className="cart-item justify-between" key={index}>
                <img
                  src={item.images}
                  alt="Product"
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.productName}</h3>
                  <p></p>
                
                  <p><b>Quantity:</b>{item.Quantiy}</p>
                  <div className="cart-actions">
                  <Rating name="read-only" value={item.rating} precision={0.5} readOnly />

                    
                  </div>
                </div>
                <div className="quantiy">
                  <QuantityDrop Quantity={Quantity}  setchangeQuantity={setchangeQuantity} value={item?.Quantiy} item={item} selecteditem={selecteditem} />
                </div>
                <div className="cart-item-price ml-20 mr-15">₹{item.subtotal}</div>
                <div className="delte gold" style={{fontSize:"20px"}}>
                <MdDeleteOutline onClick={(id)=>deltecart(item._id)}  className='cursor-pointer'/>
              </div>
              </div>
            
              </>
              )
            })
          }
         
        </div>
        <div className="cart-summary mt-10">
          <h2>SUMMARY</h2>
          {/* <input type="text" placeholder="Promo Code" className="promo-input" />
          <button className="apply-btn">APPLY</button> */}
            <div className="d-flex mt-2">
        <input type="text" placeholder='enter your coupen code' />
        <button className='sub'>Apply</button>
    </div>
          <div className="summary-details">
            <p>Subtotal: ₹  { Array.isArray(cartdata) &&
       cartdata.length!==0 && cartdata.map((item)=>   parseInt(item?.price)*item?.Quantiy).reduce((total,value)=>total+value,0)
     
     }</p>
            <p>Shipping: 00.00</p>
            <p>Sales Tax:00.00</p>
            <p className="total">Estimated Total: $ 
               { Array.isArray(cartdata) &&
       cartdata.length!==0 && cartdata.map((item)=>   parseInt(item?.price)*item?.Quantiy).reduce((total,value)=>total+value,0)
     
     }
    </p>
          </div>
          <button className="addtocart m-auto">CHECKOUT</button>
        </div>
      </div>
    </div>
    <Footer />
 </div>
  )
}

export default Addtocart
