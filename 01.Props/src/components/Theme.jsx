import React, {useState} from "react"

export function toggleTheme() {
  const [dark, setDark]=useState(true) 
 const handleToggle=() =>{
   setDark(!dark) 
 }
  
  return (
    <>
      <div style={
      {background:dark ? "dark" :"white",
       color:dark? "white":"black",
       height:100vh
      }
      }>
      <button onClick={handleToggle}>
        {dark ? "white":"dark"}
      </button>
      </div>
    </>
  ) 
}
