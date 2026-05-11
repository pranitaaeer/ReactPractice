import React, {useState} from "react"

export function SearchInput () {
  const [search, setSearch] = useState("")
  const data = [
    {id: 1, name: 'pranita'}, 
    {id: 2, name: 'rani'}, 
    {id: 3, name: 'pranu'}, 
  ]
  const [showPassword, setShowPassword]=useState(false) 
  const [password,setPassword]=useState("") 
  const togglebtn=() =>{
    setShowPassword(!showPassword) 
  }
  const filteredData = data.filter((users) => users.name.toLowerCase().includes(search.toLowerCase())) 
  return (
    <>
    <input 
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
      <input
        type={showPassword ? "text":"password"}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        
      />
      <button onClick={togglebtn}>
        show Password
      </button>
    {filteredData.map((elm) => <p key={elm.id}>{elm.name}</p>)}
    </>
  ) 
}
