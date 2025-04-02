import React from 'react'
import { GrFormNextLink } from 'react-icons/gr';
import bottle from "../assets/bottle.jpeg"
import Rating from '@mui/material/Rating';

function Detail() {
  return (
    <div className='detail-section'>
     <div className="detail-left">
        <h1>Journey Of <span className='gold'>Elyesian Elegance</span></h1>
        <h1> <span className='gold'>A Fregrence</span> Timelines</h1>
        <p className='p'>Uncover the chapter of our offactory legacy each fregrence a</p>
        <p className='p'>milstone in the pursuit of timelines elegance</p>
         <button className='viewproducts' style={{display:"flex"}}>
                        <span className='viewall' ><GrFormNextLink style={{color:"white"}} />
                        </span> View full details
                    </button>
                    <div className=" flex ">
                    <div className="web-rat mt-5">
                        <div className="rat">
                        <p className='mr-2 '>5.0</p>
                        <Rating name="read-only" value={5} readOnly size='small'/>
                        </div>

                    <p className='p'>2990 rating</p>

                    </div>
                    <div className="web-rat mt-5 ml-10">
                        <div className="rat">
                        <p className='mr-2 '>100k+</p>
                       
                        </div>

                    <p className='p'>Bought in past month</p>

                    </div>
                    </div>
                   
                 
     </div>
     <div className="detail-right">
<img src={bottle} alt="" />
     </div>
    </div>
  )
}

export default Detail;
