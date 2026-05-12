import React, {useState, useEffect} from "react"

export function FetchApi() {
  
  const [data, setData]=useState([]) 
  
  useEffect(async() =>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users") 
   setData(res.json()) 
 }, []) 
  
  return (
    <>
    <div>
      {data.map((elm, i)=>{
       return (
         <div key={i}>
          <h1>{elm.name}</h1>
          <p>{elm.email}</p>
        </div>
       ) 
      }}
    </div>
    </>
  ) 
}

