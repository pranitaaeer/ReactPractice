import React, {useState}from "react"

export function SearchInput () {
  const [search, setSearch]=useState ("") 
  const data=[
    {id:1,name='pranita'}, 
    {id:2,name='rani'}, 
    {id:3,name='pranu'}, 
  ]
  const filterdData=
  data.filter ((users) =>users.name.lowerCase().includes(search.lowerCase())) 
  return (
    <>
    <input 
      type="text", 
      value={search}, 
      onChange={(e)=>setSearch(e.target.value)}
      / >
      filteredData.map((elm) => <p>{elm.name}</p>) 
    </>
  ) 


}
