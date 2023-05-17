import React from "react";

const ListTask = ({ task, removeTask, taskCompleted }) => {
  return (
    <>
      <div className="list-Task">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          style={{ float: "left", cursor: "pointer" }}
          onChange={(e) => {
            taskCompleted(e.target.checked, task.id);
          }}
        />

        {task.status ? (
          <p
            style={{
              display: "inline-block",
              textDecoration: "line-through",
              textDecorationColor: "white",
              opacity: "0.5",
            }}
          >
            {task.title}
          </p>
        ) : (
          <p style={{ display: "inline-block" }}>{task.title}</p>
        )}

        <i
          className="fa fa-trash delete-icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            removeTask(task.id);
          }}
        ></i>
      </div>
    </>
  );
};

export default ListTask;
