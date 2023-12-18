import React from "react";

const Todo = ({item, id, removeTodo})=>(
    <div className="Todo">
        {item}
        <button onClick={()=>removeTodo(id)}>x</button>
    </div>
)

export default Todo