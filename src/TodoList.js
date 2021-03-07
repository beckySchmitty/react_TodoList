import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';


const TodoList = () => {
    const [todos, setTodos] = useState([{id: uuidv4(), task: "laundry"}])

    const addTodo = newTodo => {
        setTodos([...todos, newTodo])
    }

    const handleRemove = (id) => {
        setTodos([todos.filter(todo => todo.id !== id)])
    }

    return (
        <div>
            <div><NewTodoForm addTodo={addTodo}/></div>
            {todos.map(todo => <div><Todo id={todo.id} key={todo.id} task={todo.task} handleRemove={handleRemove} /></div>)}
        </div>
    )
}

export default TodoList;