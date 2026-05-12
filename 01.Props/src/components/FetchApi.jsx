import React, {useState, useEffect} from "react"

export function FetchApi() {
  
  const [data, setData]=useState([]) 
  
  useEffect=(() =>{
  const res=fetch("https://jsonplaceholder.typicode.com/users") 
   setData(res.json()) 
 }, []) 
  
  return (
    <>
    <div>
      {data.map((elm, i)=>{
      <div key={i}>
        <h1>{elm.name}</h1>
        <p>{elm.email}</p>
      </div>
      }}
    </div>
    </>
  ) 
}

