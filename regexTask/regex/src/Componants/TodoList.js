import React from "react";
import { useState } from "react";
import "./todoList.css";
export default function TodoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handelTask = (e) => {
    setTask(e.target.value);
  };
  //Add Task
  const addTask = () => {
    if (task !== "") {
      const taskInfo = {
        //to give the number tasks as Integer
        id: Math.floor(Math.random() * 1000),
        value: task,
      };
      setTodoList([...todoList, taskInfo]);
    }
  };
  // Delete task
  const deleteTask = (e, id) => {
    e.preventDefault();
    setTodoList(todoList.filter((element) => element.id !== id));
  };
  return (
    <>
      <div className="todo-list">
        <h3>My Todo List</h3>
        <input
          className="form-control"
          type="text"
          name="text"
          id="text"
          placeholder="Add Your Task ..."
          onChange={(e) => handelTask(e)}
        />
        <div class="add-btn">
          <button onClick={addTask}>Add</button>
        </div>
        {todoList !== [] ? (
          <ul className="list-group">
            {todoList.map((element) => (
              <li>
                {element.value}

                <button
                  onClick={(e) => {
                    deleteTask(e, element.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
