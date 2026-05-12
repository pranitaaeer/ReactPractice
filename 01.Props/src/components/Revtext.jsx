import React from 'react';
import { useState ,useEffect} from 'react'

function Revtext() {
  const [text, setText]=useState("")
const [revtext, setRevText]=useState("")
  
  
  
  
   const reverseText=(text)=>{
    let rev=""
    for(let val of text){
      rev=val+rev
    }
    console.log("hello")
    setRevText(rev)
    }
    
  

  return (
    <div style={{backgroundColor:"black",color:"white",height:"100vh"}}>
      
      <div>
        <input 
         type="text"
         onChange={(e)=>setText(e.target.value)}
         style={{color:"white"}}
        />
        <button onClick={()=>reverseText(text)}>submit</button>
        <p>{revtext}</p>
      </div>
    </div>
  )
}

export default Revtext
