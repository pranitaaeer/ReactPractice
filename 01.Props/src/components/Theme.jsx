import React, {useState} from "react"

export function toggleTheme() {
  const [dark, setDark] = useState(true)
  const handleToggle = () => {
    setDark(!dark)
  }

  return (
    <>
      <div style={{
        backgroundColor: dark ? "#1a1a1a" : "white",
        color: dark ? "white" : "black",
        height: "100vh"
      }}>
        <button onClick={handleToggle}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  )
}
