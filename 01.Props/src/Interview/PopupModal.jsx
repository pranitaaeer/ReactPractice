import React from 'react';
import { useState } from 'react'

function PopupModal() {
  const [show, setShow] = useState(false)
  
  
  

  return (
    <div>
      <button onClick={()=>setShow(true)}>open</button>
      { 
        show &&(
        <div>
        <h1>hello Modal</h1> 
        <button onClick={()=>setShow(false)}>close</button> 
        </div>) 
      }
   
    </div>
  )
}

export default PopupModal

