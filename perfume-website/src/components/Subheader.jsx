import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Search from './Search';
import { IoCartOutline } from "react-icons/io5";
import { FiHeart } from 'react-icons/fi';
function Subheader() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
     <header className="flex justify-between items-center px-10 py-6">
         <h1 className="text-2xl logo font-bold text-gold gold">PerfumeX</h1>
         <nav>
           <ul className="flex space-x-6 navbar">
            <a href="
            /">
 <li className="hover:text-gold cursor-pointer gold">Home</li>
            </a>
            
          
             <a href="/viewproduct">
             <li className="hover:text-gold cursor-pointer">View all</li>
            
             </a>
             

             <a href="/contactus">  <li className="hover:text-gold cursor-pointer">contact us</li></a>
           
           </ul>
         </nav>
         
         {/* <FaSearch className='search ml-8'/> */}
   <div className="d-flex left-heading gold">
   <FaSearch className='search ' onClick={()=>setOpen(true)}/>
    {
      open===true &&<Search handleClose={handleClose} />
    }
    <div className="d-flex ml-3 left-heading gold cursor-pointer" style={{fontSize:"25px"}}>
      <a href="/addtocart">
      <IoCartOutline />
      </a>

    </div>
    <div className="d-flexflex ml-3 left-heading gold cursor-pointer" style={{fontSize:"25px"}}>
    <a href="/wishlist">
       <FiHeart />
    </a>
    </div>
   
   <a href='/login'>

   <button className="bg-gold ml-6 login-btn gold text-black cursor-pointer px-4 py-2 rounded-lg">
           Log in
         </button>
   </a>
   
   </div>
         
       </header>
  )
}

export default Subheader
