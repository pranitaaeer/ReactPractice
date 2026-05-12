import React, { useState } from "react"

export function Check() {
  const [items, setItems] = useState([
    "React", "NodeJs", "Typescript"
  ])
  const [checked, setChecked] = useState([])
  
  const handleAll = () => {
    if (checked.length === items.length) {
      setChecked([])
    } else {
      setChecked(items)
    }
  }
  
  const handleOne = (item) => {
    if (checked.includes(item)) {
      setChecked(checked.filter(elm => elm !== item))
    } else {
      setChecked([...checked, item])
    }
  }
  
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={checked.length === items.length}
          onChange={handleAll}
        />
        select All
      </div>
      {items.map((elm, idx) => (
        <div key={idx}>
          <p>{elm}</p>
          <input
            type="checkbox"
            checked={checked.includes(elm)}
            onChange={() => handleOne(elm)}
          />
        </div>
      ))}
    </>
  )
}
