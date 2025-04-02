import React, { useContext, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Button, CircularProgress } from '@mui/material';
import { Mycontext } from "../App";
import { PostData } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const context = useContext(Mycontext);
  const [Loading, setLoading] = useState(false)
  const history = useNavigate();
  const [formfield, setformfield] = useState({
    email: "",
    password: ""
  })
  const changeInput = (e) => {
    setformfield(() => ({
      ...formfield, [e.target.name]: e.target.value
    }


    ))
    console.log(formfield)
  }

  const signin=(e)=>{
    e.preventDefault(); 
    try{
    if(formfield.email===""){
      context.setalertbox({
        open:true,
        error:true,
        msg:"email is blank"
      })
      return false
    }
    if(formfield.password===""){
      context.setalertbox({
        open:true,
        error:true,
        msg:"password is blank"
      })
  
      return false
    }
    console.log(formfield)
    setLoading(true)
    PostData("/api/auth/login",formfield).then(async (res)=>{
      if( await res.status !==false){
          localStorage.setItem("token",res.token);
          const user={
            name:res.user?.name,
            email:res.user?.email,
            userId:res.user?.id
          }
      
      
          
          localStorage.setItem("user",JSON.stringify(user));
          context.setalertbox({
        open:true,
        error:false,
        msg:"User Login Successfully"
          });
        
      setTimeout(()=>{
        setLoading(false);
      
        window.location.href="/";
      })
          
      
        }else{
          setLoading(false)
          context.setalertbox({
            open:true,
            error:true,
            msg:res.message
      
          })
        }
      }).catch(errr=>console.log(errr))
      
  }catch(error){
    console.log(error)
    setLoading(false)
    context.setalertbox({
      open:true,
      error:true,
      msg:"User does't exist"
        });
  
  }
}
const forgetpassword=()=>{
  if(formfield.email===""){
    context.setalertbox({
      open:true,
      error:true,
      msg:"please enter email"
    })
    return false
  }else{
    localStorage.setItem("userEmail",formfield.email);
    let email={
      email:formfield.email
    }
    localStorage.setItem("actionType","Change_password");
    PostData("/api/auth/forgetpassword",email).then((res)=>{
      if(res.status==="success"){
        history("/verify-otp");
      }else{
        context.setalertbox({
          open:true,
          error:true,
          msg:res.message,
            });
      }
    })
    
  }

}
  

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue</p>

        <form className="login-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="email" onChange={changeInput} name='email' placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" name='password' onChange={changeInput}  placeholder="Password" required />
          </div>

          <button type="submit" className="login-button" onClick={signin}>Login</button>
        </form>

<p className="forgot-password" onClick={forgetpassword}>Forgot Password?</p>

       

        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
