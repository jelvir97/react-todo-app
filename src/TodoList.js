import React, { useState } from "react"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import { v4 as uuid } from 'uuid';

const TodoList = ()=>{
    const [todos, setTodos] = useState([])

    const addTodo = (val)=>{
        setTodos([...todos, {val ,id: uuid()}])
    }

    const removeTodo = (id)=>{
        
        setTodos(todos.filter( t => t.id !== id))
    }
    return (
        <div className="TodoList">
            <h1 className="TodoList-Header">To-do's</h1>
            <NewTodoForm addTodo={addTodo}/>
            <div className="TodoList-Container">
                {todos.map( t=>(
                    <Todo item={t.val} key={t.id} id={t.id} removeTodo={removeTodo}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;