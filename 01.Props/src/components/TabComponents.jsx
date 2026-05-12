import React from 'react';
import { useState,useEffect} from 'react'

function App() {
  const [tab, setTab]=useState("home")
  
 
  return (
    <div>
      <button onClick={()=>setTab("home")}>home</button>
      <button onClick={()=>setTab("about")}>about</button>
      <button onClick={()=>setTab("contact")}>contact</button>
      
      <h1>{tab==="home"? "home":tab==="about"? "about":" contact"}</h1>
      
    </div>
  )
}

export default App
