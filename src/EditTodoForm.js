import React, {useState} from "react";

const EditTodoForm = ({val, id, editTodo})=>{
    const [formData, setFormData] = useState(val)

    const handleChange = (evt)=>{
        setFormData(evt.target.value)
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        editTodo({id, key:'val', val:formData})
    }

    return (
        <form className="EditTodoForm" onSubmit={(evt)=>handleSubmit(evt)}>
            <input 
                type="text"
                name="todo"
                value={formData}
                onChange={(evt)=>handleChange(evt)}
                />
        </form>
    )
}

export default EditTodoForm;