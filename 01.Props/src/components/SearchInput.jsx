import React, { useState } from "react"

export function SearchInput() {
  const [search, setSearch] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const data = [
    { id: 1, name: 'pranita' },
    { id: 2, name: 'rani' },
    { id: 3, name: 'pranu' },
  ]

  const filteredData = data.filter((users) =>
    users.name.toLowerCase().includes(search.toLowerCase())
  )

  const togglebtn = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={togglebtn}>
        {showPassword ? "Hide" : "Show"} Password
      </button>

      <div>
        {filteredData.map((elm) => (
          <p key={elm.id}>{elm.name}</p>
        ))}
      </div>
    </>
  )
}
