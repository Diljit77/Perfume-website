import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
   <footer className='mb-7'>
    <div className="section-1 flex justify-between ">
        <div className="foot-detail">
            <h1 className='gold'>PerfumeX</h1>
            <p className='p'>incover the in the esnece of euqilence with our</p>
            <p className='p'>Fregrence,where luxury meet allure in every
            
            </p>
            <p className='p'>capitive note.</p>
        </div>
        <div className="contact">
<div className="contact-us">
    <h1 className='gold'>Get Updates</h1>
    <h2>subscribe for the latest updates</h2>
    <div className="d-flex mt-2">
        <input type="text" placeholder='enter your email' />
        <button className='sub'>Subscibe</button>
    </div>
   
</div>

        </div>
    </div>
    <div className="section-2  flex ">
<TiSocialFacebook  className='text-white contact-icon ' />
<FaTwitter className='text-white contact-icon  ' />
<FaYoutube className='text-white contact-icon ' />
<IoLogoInstagram className='text-white contact-icon  '  />
    </div>
<hr className='p hr'   />
    <div className="section-3 mb-3 flex justify-around">
        <p className='p'>Privacy policy</p>
        <p className='p'>About Us</p>
        <p className='p'>contact us</p>
        <p className='p'>Copyright@2023</p>



    </div>
   </footer>
  )
}

export default Footer;
