import {createContext, useContext} from 'react'

export const ToDoContext = createContext({
    todos:[
        {
            id: 1,
            title: 'Buy groceries',
            completed: false
        }
    ],
    addtodo: (todo)=>{},
    updatetodo: (todo)=>{},
    deletetodo: (id)=>{},
    complete: (id)=>{},
})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider