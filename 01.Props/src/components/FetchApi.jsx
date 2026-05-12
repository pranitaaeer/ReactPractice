import React, {useState, useEffect} from "react"

export function FetchApi() {
  
  const [data, setData] = useState([]) 
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users") 
      const jsonData = await res.json()
      setData(jsonData) 
    }
    fetchData()
  }, []) 
  
  return (
    <>
    <div>
      {data.map((elm, i) => {
        return (
          <div key={i}>
            <h1>{elm.name}</h1>
            <p>{elm.email}</p>
          </div>
        ) 
      })}
    </div>
    </>
  ) 
}
