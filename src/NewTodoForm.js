import React, {useState} from "react";

const NewTodoForm = ({addTodo}) => {
    const initialState = {
        task: '',
    }
    const [formData, setFormData] = useState(initialState);




    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        })) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({...formData})
        // console.log({...formData})
        setFormData(initialState)
    }


    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            />
            <button>Add</button>
        </form>

    )
}

export default NewTodoForm;