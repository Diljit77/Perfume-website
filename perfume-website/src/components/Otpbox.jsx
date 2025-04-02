
import React, { useState } from 'react'

const Otpbox=({length,onchange})=> {
    const [otp,setOtp]=useState(new Array(length).fill(""));
    const handlechange=(element,index)=>{
        const value=element.value
        if(isNaN(value)) return ;
        const newOtp=[...otp];
        newOtp[index]=value;
        setOtp(newOtp);
        onchange(newOtp.join(""))
    if(value && index<length-1){
        document.getElementById(`otp-input-${index+1}`).focus();
    }

    }
    const handledown=(event,index)=>{
        if(event.key==="Backspace" && !otp[index] && index>0){
            document.getElementById(`otp-input-${index-1}`).focus();
    }
}
  return (
    <div  style={{display:"flex",gap:"5px",justifyContent:"center"}} className='otpbox m-5'>
        {
            otp.map((data,index)=>(
                <input type="text" key={index} maxLength={1} value={otp[index]} id={`otp-input-${index}`} 
                onChange={(e)=>handlechange(e.target,index)} onKeyDown={(e)=>handledown(e,index)} style={{width:"45px",height:"45px",color:"black",fontSize:"17px",border:"1px solid white",padding:"2px",margin:"2px",textAlign:"center"}} />
            ))
        }
      
    </div>
  )
}

export default Otpbox
