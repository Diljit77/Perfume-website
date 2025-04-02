import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr"
import logo from "../assets/download.jpeg"
import Subheader from './Subheader';

function Header() {

  return (
    <div className="Header text-white min-h-screen">
  
    <Subheader />

    <main className='herosection'>
        <div className="maintitle">

            <h1>Sculpting <span className='gold'>Dreams in a </span></h1>
            <h1><span className='gold'>Bottle </span>Elyasian Seents's Art</h1>
            <h1>of Profumery</h1>
            <p>Discover the secret of our timelines design,where the exquiste</p>
            <p>mariage of form and fregrence elevate each bottle into a work of art</p>
           
<a href="/viewproduct">
<button className='viewproducts' style={{display:"flex"}}>
              
               <span className='viewall' ><GrFormNextLink style={{color:"white"}} />
                </span> View all products
            </button>
</a>
            
             </div>
             <div className="prefume-image">
    <div className="d-flex">
        <img src={logo} alt="" />
  

    </div>
   </div>
   <div className="main-detail">
<h1 className='gold'>100k+</h1>
<h1 className='mb-3'>Trusted Client</h1>
<hr />
<h1 className='gold mt-5'>80k+</h1>
<h1 className='mb-3'>Unique Perfume</h1>
<hr />
<h1 className='gold mt-5'>10y+</h1>
<h1 className='mb-3'>Giving best Service</h1>
<hr />
   </div>
    </main>
  
  </div>
  )
}

export default Header
