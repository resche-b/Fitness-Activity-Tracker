import React from "react";
import { useState } from "react";
import "./ToDoList.css"

const ToDoList = () => {
  const [items, setItems] = useState([
    "Dashboard",
    "Goals",
    "Calander",
    "Contact",
  ]);

  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <li className="todo-list-items" key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
