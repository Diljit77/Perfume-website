

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Alert } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetail from './pages/ProductDetail';
import Forgetpassword from './pages/Forgetpassword';
import Viewallproducts from './pages/Viewallproducts';
import Resetpassword from './pages/Reset-password';
import VerifyOtp from './pages/Verifyotp';
import { Snackbar } from '@mui/material';
import Addtocart from './pages/Addtocart';
import ContactUs from './pages/ContactUs';
import WIshlist from './pages/WIshlist';
import { createContext, useState } from 'react';
import { PostData } from './utils/api';

const Mycontext=createContext();
function App() {
  const [alertbox,setalertbox]=useState({
    msg:"please fill",
    error:false,
    open:false
  });
  const addtocart=(data)=>{
  
    const user=JSON.parse(localStorage.getItem("user"));
    if(!user){
      setalertbox({
          msg:"please Login",
      open:true,
      error:true,
      
      })
      return null;
  }
   PostData("/api/cart/add",data).then((res)=>{
    if(res.status!==false){
      if(res!==null && res!==undefined && res!==""){
        console.log(res)
        setalertbox({
          open:true,
          error:false,
          msg:"Item is added to product cart"
        })
      }
    }
    else{
      setalertbox({
        open:true,
        error:true,
        msg:"item is already added"
      })
      
    }
   
   }).catch((err)=> {
    console.log(err)
    setalertbox({
    open:true,
    error:true,
    msg:"item is already added"
  })})
  
    console.log(data)
  }
const value={
  alertbox,
    setalertbox,
    addtocart,
}
const handleclose=(event,reason)=>{
  if(reason==="clickaway"){
    return ;
  }
  setalertbox({
    open:false
  });
}

  return (   
    <>
   <Router>
    <Mycontext.Provider value={value} >

    <Snackbar open={alertbox.open} autoHideDuration={6000} oncClose={handleclose}  >
      <Alert onClose={handleclose} severity={alertbox.error===false?"success":"error"}
      variant="filled" sx={{width:"100%"}} >
     {alertbox.msg} 
      </Alert>

    </Snackbar>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/viewproduct" element={<Viewallproducts/>} />
        <Route path="/addtocart" element={<Addtocart/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/wishlist" element={<WIshlist/>} />

        <Route path="/selectedproduct/:id" element={<ProductDetail />} />
      </Routes>
      </Mycontext.Provider>
    </Router>
  

    </>
  )
}
export { Mycontext};
export default App
