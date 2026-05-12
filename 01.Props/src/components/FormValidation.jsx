import React from 'react';
import { useState } from 'react'

function FormValidation() {
  const [name, setName] = useState("")
  const [email, setEmail]=useState("")
  
  const handleForm=(e)=>{
    e.preventDefault()
    if(!name || !email) {
      return alert("all fields are required")
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email)) {
      return alert("please provide a valid email address")
    
    }
  }

  return (
    <div>
      <form onSubmit={handleForm}>
         <input 
         type="text"
         placeholder="Enter your name"
         onChange={(e)=>setName(e.target.value)}
         />
         <input 
         type="text"
         placeholder="Enter your email"
         onChange={(e)=>setEmail(e.target.value)}
         />
         <button type="submit">save</button>
      </form>
    </div>
  )
}

export default FormValidation
