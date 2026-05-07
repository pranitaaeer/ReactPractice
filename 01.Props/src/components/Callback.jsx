import React,{useState,useCallback} from 'react'
import Child from "./Child.jsx"
export function callback () {

  const [count, setCount]=useState(0)
  const cb=useCallback (() =>{
    console.log("clicked") 
  },[]) 
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>
      increment</button>
      <Child  click={cb}/>
    </>
  ) 
}
