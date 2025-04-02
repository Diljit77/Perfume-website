import React, { useContext, useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { Mycontext } from '../App';
import { useNavigate } from 'react-router-dom';
import { PostData } from '../utils/api';

function Resetpassword() {
  const context = useContext(Mycontext);
  const history = useNavigate();
  const [formfield, setformfield] = useState({
    email:localStorage.getItem("userEmail"),
    newpassword: "",
    confirmpassword: ""
  }) 
  const changeInput = (e) => {
    setformfield(() => ({
      ...formfield, [e.target.name]: e.target.value
    }


    ))
    console.log(formfield)
  }
  const changepass=(e)=>{
    e.preventDefault();
    try {
        if(formfield.newpassword===""){
            context.setalertbox({
                open:true,
                error:true,
                msg:"enter the password"
          
              })
        }
        if(formfield.confirmpassword===""){
          return  context.setalertbox({
                open:true,
                error:true,
                msg:"please confirm the password"
          
              })
        }
        if(formfield.confirmpassword!==formfield.newpassword){
            return  context.setalertbox({
                open:true,
                error:true,
                msg:"the pasword is not match"
          
              }) 
        
        }  
        let Email=localStorage.getItem("userEmail")
        let user={
            email:Email,
            newPass:formfield.newpassword
        }
        PostData("/api/auth/resetpassword",user).then((res)=>{
            if(res.success===true){
                  context.setalertbox({
                    open:true,
                    error:false,
                    msg:"Password Changed successfully"
              
                  }) 
                  localStorage.removeItem("userEmail");
                  localStorage.removeItem("actionType");
                  history("/login");
            }
        })
    } catch (error) {
        console.log(error)
    }
    
    }
    
    
  return (
     <div className="login-container">
      <div className="login-card">
     
        <p className="login-subtitle">Please enter Reset your password </p>
  
        <form className="login-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="password" placeholder=" Enter a new password" onChange={changeInput} name='newpassword' required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" name='confirmpassword' onChange={changeInput}   placeholder="Confirm you password" required />
          </div>
        <a href="/login">
        <button type="submit" className="login-button" onClick={changepass}>Reset Password</button>
          </a> 
         
        </form>
  
    
  
   
      </div>
    </div>
  )
}

export default Resetpassword
