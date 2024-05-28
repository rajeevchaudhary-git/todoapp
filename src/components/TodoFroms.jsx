import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoFroms() {
 const [todo,settodo] = useState('');
 const {addTodo} = useTodo();

 const add = (e) =>{
    e.preventDefault();
    if(!todo) return

    addTodo({todo:todo,completed:false});

    settodo("");
    console.log(todo);
 }
    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black rounded-l-lg px-3 outline-none duration-150 text-black  py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-red-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
  
}

export default TodoFroms
