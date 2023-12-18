import React, {useState} from "react";

const NewTodoForm = ({addTodo})=>{
    const [formData, setFormData] = useState('')

    const handleChange = (evt)=>{
        setFormData(evt.target.value)
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        addTodo(formData)
        setFormData(()=>'')
    }
    
    return (
        <form className="NewTodoForm">
            <label htmlFor="new-todo">New Todo</label>
            <input 
                type="text"
                id="new-todo"
                onChange={(evt)=>handleChange(evt)}
                placeholder="todo item"
                value={formData}
                name="new-todo" />
            <button onClick={(evt)=>handleSubmit(evt)}>+</button>
        </form>
    )
}

export default NewTodoForm;