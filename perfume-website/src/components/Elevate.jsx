import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'

function Elevate() {
  return (
<div className='elevate-section d-flex'>
<div className="left-side">
<h1>Elevate Your Senses With</h1>
<h1>Elyesian Elegance</h1>
</div>
<div className="right-side">
<p>Welcome to the epiotme of the luxury - The Elyesian scents</p>
<p>signautre Collection</p>
 <button className='viewproducts' style={{display:"flex"}}>
                <span className='viewall' ><GrFormNextLink style={{color:"white"}} />
                </span> Explore More
            </button>
</div>

</div>

  )
}

export default Elevate
