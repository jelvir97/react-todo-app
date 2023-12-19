import React from "react";
import "./Todo.css"

const Todo = ({item, id, removeTodo, getEditForm, completed, editTodo})=>(
    <div className={completed? "Todo completed": "Todo"}>
        <h4 className="Todo-Item">{item}</h4>
        <button onClick={()=>removeTodo(id)}>x</button>
        <button onClick={()=>getEditForm(id)}>Edit</button>
        {completed ? 
            <button onClick={()=>editTodo({id,key:'completed', val:false})}>Mark as Incomplete</button> 
            : <button onClick={()=>editTodo({id,key:'completed', val:true})}>Mark as Complete</button>}
        
    </div>
)

export default Todo