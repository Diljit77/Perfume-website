import React, { useContext, useEffect, useState } from 'react'
import Footer from "../components/Footer";
import logo from "../assets/download.jpeg"
import Subheader from '../components/Subheader'
import { deleteData, fetchDataFromApi } from '../utils/api';
import { Mycontext } from '../App';

function WIshlist() {
  const [mylist,setmylist]=useState([]);
  const context=useContext(Mycontext);
  useEffect(()=>{
    fetchDataFromApi(`/api/wishlist`).then((res)=>{
    
      setmylist(res)
    })
  })
    const deletlist=(id)=>{
      deleteData(`/api/wishlist/${id}`).then((res)=>{
          context.setalertbox({
              msg:"Item removed from list",
         open:true,
         error:false,
      
       })
       fetchDataFromApi("/api/wishlist").then((res)=>{
          setmylist(res);
        
      
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
    <div className='wishlist'>
        <Subheader />
        <h1 className='gold m-auto items-center flex justify-center'>My Wishlist</h1>
       <div className="cart-content mb-6">
  
        <div className="cart-items ">
          {
            mylist.length!==0 && mylist.map((item, index) => (
              <div className="cart-item justify-between" key={index}>
                <img
                  src={item.images}
                  alt="Product"
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.productName
}</h3>
                
               
               
                 
                </div>
                <div className="cart-item-price">{item.price}</div>
                <div className="add ml-auto">
                  <button className='addto' >add to cart</button>
                </div>
                <div className="add ml-auto">
                  <button className='addto cursor-pointer' onClick={(id)=>deletlist(item._id)}  >remove</button>
                </div>
               
              </div>
            ))
          }
         
        </div>

    


      </div>
      <Footer />
    </div>
  )
}

export default WIshlist
