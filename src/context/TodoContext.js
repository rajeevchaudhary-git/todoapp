import React,{createContext,useContext} from "react";

export const TodoContextAp = createContext({
    todo:[{
        id:1,
        todo:"Todo msg",
        completed:false,
    }],
    addTodo:(todo)=>{},
    updateTodo:(Todos,id)=>{},
    deleteTodo:(id)=>{},
    toogleComplete:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContextAp);
}

export const TodoProvider = TodoContextAp.Provider;