import React, { useEffect, useState } from 'react'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

function QuantityDrop(props) {
    const [inputVal, setinputVal] = useState(1)
    const minus = () => {
        if(inputVal===1){
            setinputVal(inputVal)
           props.Quantity(inputVal);
        }else{
            setinputVal(inputVal-1)
            setinputVal(inputVal-1);
            props.Quantity(inputVal-1);
        }

    }    
    useEffect(() => {
     
        props?.selecteditem(props.item,inputVal);
      
    },)
  
   
  
    
    const plus = () => {
setinputVal(inputVal+1)
props.Quantity(inputVal+1);

    }
    return (
        <div className="quantityDrop">
            <button onClick={minus} className='minus'><FaMinus /></button>
         <span className='inpul'>{inputVal}</span>
            <button onClick={plus} className='minus'><FaPlus /></button>
        </div>
    )
}

export default QuantityDrop