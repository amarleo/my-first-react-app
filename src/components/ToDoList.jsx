import React from "react";
import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem todo={todo} />
        ))}
    </ul> 
  );
}