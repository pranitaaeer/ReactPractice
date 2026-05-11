import React, {useState} from "react"

export function SearchInput () {
  const [search, setSearch] = useState("")
  const data = [
    {id: 1, name: 'pranita'}, 
    {id: 2, name: 'rani'}, 
    {id: 3, name: 'pranu'}, 
  ]
  const filteredData = data.filter((users) => users.name.toLowerCase().includes(search.toLowerCase())) 
  return (
    <>
    <input 
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    {filteredData.map((elm) => <p key={elm.id}>{elm.name}</p>)}
    </>
  ) 
}
