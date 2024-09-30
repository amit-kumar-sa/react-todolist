import { useState } from "react";
export default function TodoList(){
    let[todos, setTodos]=useState(["sample task"]);
    let[newTodo,setNewTodo]=useState("");

    let addNewTask =()=>{
       setTodos([...todos,newTodo]);
       setNewTodo("");
    }
    let UpdateTask=(event)=>{
       setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="add a task" value={newTodo}  onChange={UpdateTask}></input>
            <br />
            <button onClick={addNewTask}> Add task</button>
            <br />
            <br />
            <br />

            <hr />
        <h4>Todo List</h4>
        <ul>
            {
                todos.map((todo)=>(
                   <li>{todo}</li> 
                ))
            }
        </ul>
        </div>
    )
}