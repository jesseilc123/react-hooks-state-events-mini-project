import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskName, setTaskName] = useState("")
  const [taskCategory, setTaskCategory] = useState("All")
  
  function ontaskFormSubmit(event){
    event.preventDefault()
    const newItem = {
      key : taskName,
      text : taskName,
      category : taskCategory
    }
    onTaskFormSubmit(newItem)
  }
  
  return (
    <form className="new-task-form" onSubmit={ontaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map((cat) => (<option key={cat} value={cat} >{cat}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
