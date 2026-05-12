import React from 'react';
import { useState } from 'react'

function App() {
  const [quote, setQuote]=useState("")
  
const quotes = [
    "Learn React daily",
    "Practice makes perfect",
    "Code never lies",
    "Consistency wins"
  ];
 const generateRandom=()=>{
   const random=Math.floor(Math.random()*quotes.length)
   setQuote(quotes[random])
   
 }
  return (
    <div>
      <button onClick={generateRandom}>generate</button>
      <h1>{quote}</h1>
    </div>
  )
}

export default App
