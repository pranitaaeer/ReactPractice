import React, {useState,useEffect} from "react"

export function Stopwatch () {
  const [ timer, setTimer]=useState(0) 
  const [run, setRun]=useState (false) 

 useEffect (() =>{
   let timer;
   if(run) {
     timer=setInterval ((
       setTimer ((prev)=>prev+1) 
     )=>,1000) 
   }
   return () =>{
     clearInterval(timer) 
   }
 }, [run]) 
  
  return (
    <>
    <button onClick={setRun(true)}>start</button>
   <button onClick={setRun(false)}>stop</button>
   <button onClick={setTimer(0)}>Restart</button>
    
    </> 
  ) 
}




