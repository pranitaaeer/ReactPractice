import React, {useState} from "react"

export function Check() {
  const [items, setItems]=useState([
    "React", "NodeJs", "Typescript"
  ]) 
  const [checked, setChecked]=useState([]) 
  const handleAll=() =>{
    if(checked.length===items.length)
    {
      setChecked([]) 
    }else setChecked (items) 
    
  }
  const handleOne=(item) =>{
    setItems([...items,item]) 
  }
  return (
    <>
      <input
        type="checkbox"
        checked={checked.length===items.length}
        onChange={handleall}
      
      />
      select All
      {items.map((elm, idx)=>{return (
      <p>{elm}</p>
      <input
      type="checkbox"
      checked={checked.includes(elm)}
      onChange={()=>handleOne(elm)}         
      />
      )}}
    </>
  ) 



  
}
