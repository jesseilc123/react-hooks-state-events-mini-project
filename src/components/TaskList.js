import React from "react";
import Task from "./Task";

function TaskList({tasks, setTaskInList}) {

  function handleRemove(text){
    const newList = tasks.filter((task) => text !== task.text);
    setTaskInList(oldList => oldList = newList)
  }
  return (
    <div className="tasks">
      {tasks.map((item) => (
        <Task key={item.text} text={item.text} category={item.category} handleRemove={handleRemove} />
      ))}
    </div>
  );
}

export default TaskList;
