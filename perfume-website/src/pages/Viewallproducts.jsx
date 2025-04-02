import React, { useEffect, useState } from 'react'

import Subheader from '../components/Subheader'

import ProductCard from '../components/ProductCard';

import Footer from '../components/Footer';
import { fetchDataFromApi } from '../utils/api';


function Viewallproducts() {
  const [productdata,setProductData]=useState([])
  useEffect(()=>{
     fetchDataFromApi(`/api/product/`).then((res)=>{
                setProductData(res);
              //  console.log(productdata)
          
              })
  })

  return (
  <div className="contianer">
    <Subheader />
    <div className="all-product flex mt-10 mb-8 ">
      
      <div className="products w-75">
        <div className="heading">
   
        <h1 className='mt-2 mb-2 flex items-center justify-center'>ALL products</h1>

<div className=" flex flex-wrap items-start mt-5 gap-1 gap-y-1">
  
       {
        productdata.length!==0 && productdata.map((products,index)=>{
  return(<div className="m-5">
   <ProductCard className="" products={products} key={index} />
  </div>

  )
        })
      }
  
{/* <ProductCard className="f2" />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard /> */}
</div>
        </div>
        


      </div>
    </div>
    <Footer  />
  </div>
  )
}

export default Viewallproducts
