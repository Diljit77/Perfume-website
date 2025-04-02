import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { Mycontext } from '../App';
import { fetchDataFromApi, PostData } from '../utils/api';

function Reviewsection() {
    const context=useContext(Mycontext);
    const [ReviewData,setReviewData]=useState([])
    const [rating,setrating]=useState(1)
    const [review,setreview]=useState({
        customerName:"",
        review:"",
    customerRating:0,
    productId:"",
    customerId:""

    });
useEffect(()=>{
    setTimeout(() => {
        fetchDataFromApi(`/api/review?productId=${id}`).then((res)=>{
            console.log(ReviewData)
            setReviewData(res)
        })
    }, 2000);
})
    const changerating=(e)=>{
        setrating(e.target.value)
    review.customerRating=e.target.value
    }
    const changeinput=(e)=>{
    setreview(()=>({
        ...review,[e.target.name]:e.target.value
    }))
    console.log(review)
    
    }
    
    const {id}=useParams();
    const addreview=(e)=>{
        e.preventDefault();
      
        const user=JSON.parse(localStorage.getItem("user"));
        review.customerId=user?.userId
        review.productId=id;
        console.log(review)
    if(!review.customerId){
        setIsLoading(false)
           context.setalertbox({
            msg:"Please Login for adding review",
       open:true,
       error:true,
    
    })
    return null;
        }
     if(review.customerId!==""){
        PostData("/api/review/add",review).then((res)=>{
           
            
           
            fetchDataFromApi(`/api/review?productId=${id}`).then((res)=>{
                console.log(ReviewData)
                setReviewData(res)
            })
        // console.log("add",res)
        }).catch(err=>{
        
            context.setalertbox({
                msg:"Please Login for adding review",
           open:true,
           error:true,
        
         })
      
            console.log(err)})
      }else{
     
        context.setalertbox({
            msg:"Please Login for adding review",
       open:true,
       error:true,
    
     })
    
    
      }
    
    
     }  
     function formatDate(isoString) {
        const date = new Date(isoString);
        const options = { month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className="conatainer " style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
            <h1 className=' mt-12 mb-4 gold'>Reviews</h1>
            {
                ReviewData.length!==0 && ReviewData.map((item,index)=>{
                    return (
                        <div className="reviewcard m-auto" style={{ width: "100%" }} >
                        <div className="flex justify-between">
                            <p>{item.review}</p>
                            <Rating name="read-only" value={item.customerRating} readOnly />
                        </div>
                        <div className="flex">
                            <p className='p'>{item.customerName}</p>
                            <p className='p ml-4'>{formatDate(item?.dataCreated)}</p>
                        </div>
        
                        <hr className='p mt-5 mb-5' />
                    </div>
                    )
                })
            }
           
          
            <h1 className='gold mb-5'>Add a Review</h1>
            <div className="form">
                <form className='reviewForm'>

                    <div className="form-group">
                        <textarea className='form-control textra p-5' placeholder='Write a Review' onChange={changeinput}  name='review' style={{width:"500px",height:"300px"}} ></textarea>
                    </div>



                    <input type="text" className='form-control shadow p-2 mb-3' name='customerName' placeholder='Name' onChange={changeinput}   />


                    <div className="form-group">
                        <Rating name='rating' value={rating}  onChange={changerating}   size='large' />
                    </div>



                    <button type='submit'  onClick={addreview} className='addtocart '>
                        Submit review </button>
                </form>
            </div>
        </div>






    )
}

export default Reviewsection
