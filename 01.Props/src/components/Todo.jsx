import React from "react"

export function Todo() {
  const [todo, setTodo]=useState("")
  const [todos, setTodos]=useState([]) 
  
  const handleAddTodo=() =>{
    setTodos([...todos, todo]) 
    setTodo("") 
  }
  const handleDelete=(id) =>{
    setTodos(todos.filter((_,idx)=>idx!==id) 
  }
  
  return (
    <>
      <input 
        type="text"
        value={todo}
        onChang={(e)=>setTodo(e.target.value)}
        />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos.map((elm, idx) =>
        <div key={idx}>
        <h1>{elm}</h1> 
        <span>
        <button onClick={()=>handleDelete(idx)}>delete</button>
        </span>
        </div>
        }
      </div>
    
    </>
  ) 
}
