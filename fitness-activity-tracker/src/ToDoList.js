import React from "react";
import { useState } from "react";
import "./ToDoList.css"

const ToDoList = () => {
  const [items, setItems] = useState([
    "Finish my work",
    "Go on a run",
    "Create scheule",
    "Choose courses making it longer to test",
  ]);

  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <li className="todo-list-items" key={index}>
          <label>
            <input type="checkbox" className="todo-checkbox" />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
