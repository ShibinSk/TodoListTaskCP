import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import "./Todo.css";
const Todo = () => {
  const [task, setTasks] = useState([]);

  const addTask = (value) => {
    const newTask = [...task, { id: Date.now(), title: value, status: false }];
    console.log(newTask, "newtaskk");
    setTasks(newTask);
  };

  const removeTask = (id) => {
    const newTask = task.filter((obj) => obj.id !== id);
    setTasks(newTask);
  };

  const taskCompleted = (value, id) => {
    console.log(id, "id is");
    console.log(value, "valueee");
    const newTask = [...task];
    const updatedTasks = newTask.map((item) => {
      if (item.id === id) {
        console.log(item.id, id, "both ids are same");
        console.log(item.status, "current status");
        item.status = value;
        console.log(item.status, "after status");
      }
      return item;
    });
    console.log(updatedTasks, "updated array");
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="todo-container">
        <div
          className="header"
          style={{ fontWeight: "bold", padding: "3px 2px" }}
        >
          TO-DO APP
        </div>

        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {task.map((task, index) => (
            <ListTask
              task={task}
              removeTask={removeTask}
              taskCompleted={taskCompleted}
              key={task.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
