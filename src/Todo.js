import React from "react";

const Todo = ({id, task, handleRemove}) => {

    const remove = () => {
        handleRemove(id)
    }

    return (
        <div id={id}>
            {task}
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;