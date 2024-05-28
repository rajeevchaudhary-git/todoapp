import React, { useState,useEffect } from "react";
import {TodoProvider} from "./context"
import TodoFroms from "./components/TodoFroms";
import { ToDoItems } from "./components";
function App() {
const [todo,settodo] = useState([]);
const addTodo=(todos)=>{
settodo((prev)=>[{id:Date.now(),...todos},...prev])
}
const updateTodo=(id,todos)=>{
settodo((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todos : prevTodo)));
}
const deleteTodo=(id)=>{
settodo((prev)=>prev.filter((todo)=>todo.id!==id))
}
const toogleComplete=(id)=>{
  settodo((prev)=>prev.map((prevTOdo)=>prevTOdo.id==id ? 
  {...prevTOdo,completed:!prevTOdo.completed} : prevTOdo ))

  // settodo((prev)=>prev.map((prevTOdo)=>{
  //   if(prevTOdo.id==id && !prevTOdo.completed) {
  //     return prevTOdo.todo;
  //   } 
  //   else{
  //     return prevTOdo;
  //   }
  // }
   
  // ))

}

useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    settodo(todos);
  }
}, [])

useEffect(() => {
  console.log(todo);
  localStorage.setItem("todos", JSON.stringify(todo))
}, [todo])

  return (
   <TodoProvider value={{todo,updateTodo,deleteTodo,addTodo,toogleComplete}}>
<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Oragnise Your Day   </h1>
                    <div className="mb-4">
                        {/* Todo form here */} 
                        <TodoFroms/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todo.map((todo)=>(
                          <div className="w-full" key={todo.id}>
                            <ToDoItems todo={todo}/>
                          </div>
                        ))}
                        {/* <ToDoItems/> */}
                    </div>
                </div>
            </div>   </TodoProvider>
  )
}

export default App
