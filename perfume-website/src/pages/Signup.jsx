import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../App";
import { PostData } from "../utils/api";


const Signup = () => {
  const history=useNavigate();
  const [formfield,setformfield]=useState({
    name:"",
  email:"",
  password:"",
 
  })
  const [Loading, setLoading]=useState(false)
  const context=useContext(Mycontext);
  const changeInput=(e)=>{
    setformfield(()=>({
      ...formfield, [e.target.name]:e.target.value
    }
 

    ))
    console.log(formfield)
  }
  const signup=(e)=>{
    e.preventDefault();
    console.log(formfield);
    try{
      if(formfield.name===""){
        context.setalertbox({
               msg:"name can't be blank",
          open:true,
          error:true,
     
        })
      }
      console.log(context.alertbox);
      if(formfield.email===""){
        context.setalertbox({
             msg:"email cant be blank",
          open:true,
          error:true,
        })
      }
      if(formfield.password===""){
        context.setalertbox({
             msg:"email cant be blank",
          open:true,
          error:true,
        })
      }
 
      setLoading(true)
      PostData("/api/auth/signup",formfield).then( async (res)=>{
    console.log(res);
        if( await res.success===true){
          context.setalertbox({
            open:true,
            error:false,
            msg:"Registered Succesfully"
          });
          history("/login")
          
        }else{
          setLoading(false)
          context.setalertbox({
            open:true,
            error:true,
            msg:res.message
          });

        }
      })
    }catch(err){
      setLoading(false)
console.log(err)
context.setalertbox({
open:true,
error:true,
msg:"Email is already exist"
});
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Create Account</h2>

        <form className="login-form">
          <div className="input-group">
          <input type="text" placeholder="Full Name" onChange={changeInput} name='name' />
          </div>
          <div className="input-group">
    
          <input type="email" name='email' placeholder="Email Address" onChange={changeInput} />
          </div>
      <div className="input-group">
      <input type="password" placeholder="Password" name='password' onChange={changeInput} />
      </div>
      
          <button type="submit" className="login-button" onClick={signup}>Sign Up</button>
        </form>

        <p className="signup-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

