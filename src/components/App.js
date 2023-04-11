import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [taskInList, setTaskInList] = useState(TASKS)
  const [isCategory, setIsCategory] = useState("All")

  function handleFilter(){
    setIsCategory(() => isCategory)
  }

  function test(){
    setTaskInList(() => taskInList)
  }

  function onTaskFormSubmit(element){
    const dataArray = [...taskInList, element]
    return setTaskInList(dataArray)
  }

  const filterTasks = taskInList.filter((task) =>
  task.category === isCategory || (isCategory === "All")
  ) 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        isCategory={isCategory} 
        setIsCategory={setIsCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES}  
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
        tasks={filterTasks} 
        setTaskInList={setTaskInList}
      />
    </div>
  );
}

export default App;
