import React from "react";

const Todo = ({item, id, removeTodo, getEditForm})=>(
    <div className="Todo">
        {item}
        <button onClick={()=>removeTodo(id)}>x</button>
        <button onClick={()=>getEditForm(id)}>Edit</button>
    </div>
)

export default Todo