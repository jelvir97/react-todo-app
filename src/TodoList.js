import React, { useState } from "react"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import EditTodoForm from "./EditTodoForm"
import { v4 as uuid } from 'uuid';

const TodoList = ()=>{
    const [todos, setTodos] = useState([])

    const addTodo = (val)=>{
        setTodos([...todos, {val ,id: uuid(), edit:false, completed: false}])
    }

    const removeTodo = (id)=>{
        
        setTodos(todos.filter( t => t.id !== id))
    }

    const editTodo = ({id, key, val})=>{     
        setTodos(todos.map( t => {
            if(t.id === id) return{...t,edit:false,[key]:val}
            return t
        }))
    }

    const getEditForm = (id)=>{
        setTodos( ( )=> todos.map( t => {
            if(t.id === id) return {...t, edit:true}
            return t
        }))
    }
    return (
        <div className="TodoList">
            <h1 className="TodoList-Header">To-do's</h1>
            <NewTodoForm addTodo={addTodo}/>
            <div className="TodoList-Container">
                {todos.map( t => t.edit ? <EditTodoForm val={t.val} key={t.id} id={t.id} editTodo={editTodo}/> : 
                        <Todo item={t.val} 
                                key={t.id} id={t.id} 
                                removeTodo={removeTodo} 
                                getEditForm={getEditForm} 
                                editTodo={editTodo} 
                                completed={t.completed}/> 
                    
                )}
            </div>
        </div>
    )
}

export default TodoList;