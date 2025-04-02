import React from 'react'
import { FaUser } from 'react-icons/fa'

function Forgetpassword() {
  return (
    <div className="login-container">
    <div className="login-card">
   
      <p className="login-subtitle">Please enter your Email </p>

      <form className="login-form">
        <div className="input-group">
          <FaUser className="icon" />
          <input type="email" placeholder="Email Address" required />
        </div>
      
      <a href="">
      <button type="submit" className="login-button">Reset Password</button>
        </a> 
       
      </form>

  

 
    </div>
  </div>
  )
}

export default Forgetpassword
