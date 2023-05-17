import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
   
    const taskValue=value.trim()
    
   if(taskValue){
      addTask(value);
      setValue("");
    } 
  //  addTask(value);
    setValue("");
  };

  return (
    <>
      <div className="input-container ">
        <input
          type="text"
          className="input "
          placeholder="enter your task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <br />
        {value ? (
          <i
            class="fa-sharp fa-solid fa-plus "
            style={{ cursor: "pointer", height: "50px" }}
            onClick={addItem}
          ></i>
        ) : (
          <i
            class="fa-sharp fa-solid fa-plus"
            style={{ cursor: "pointer" }}
          ></i>
        )}
      </div>
    </>
  );
};

export default AddTask;
