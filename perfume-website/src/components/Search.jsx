import React from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { IoClose } from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Search(props) {
  return (
    <Dialog
    
    open={open}
   
   
    onClose={props.handleClose}
    TransitionComponent={Transition}
    fullWidth
    maxWidth="xl" // Control width (sm, md, lg, xl)
    PaperProps={{
      sx: {
        height: "30vh", // Controls the height
        borderRadius: 3, // Rounded corners
        backgroundColor: "#121212", // Dark mode
        color: "white",
        bottom:"35vh"
      },
    }}

  >
 <IoClose onClick={props.handleClose} className='mt-8 ml-auto mr-5'/>
    <div className="search flex flex-col items-center">
        <h1 className='gold'> Search your favorite Products</h1>
        <div className="d-flex mt-2">
        <input type="text" placeholder='search your product' style={{outline:"none",width:"520px"}} />
        <button className='sub'>Search</button>
    </div>

    </div>
  </Dialog>
  )
}

export default Search
