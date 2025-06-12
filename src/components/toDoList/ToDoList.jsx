import React, { useState } from "react";
import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../slices/todoSlice";

export default function ToDoList() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div className="todo-list">
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <p>{text}</p>
    </div>
  );
}
