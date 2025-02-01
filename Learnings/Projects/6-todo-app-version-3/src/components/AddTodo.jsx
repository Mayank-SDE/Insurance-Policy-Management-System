import { useState } from "react";

/* eslint-disable react/prop-types */
function AddTodo({handleNewItem}){
 
  const [todoName,setTodoName]=useState("");
  const [dueDate,setDueDate]=useState("");

  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  }
  const handleAddButton=()=>{
    handleNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");
  }
return  <div className="row kg-row">
<div className="col-6">
  <input type="text" value={todoName} placeholder="Enter Todo" onChange={handleNameChange} />
</div>
<div className="col-4">
  <input type="date" value={dueDate} onChange={handleDateChange} />
</div>
<div className="col-2">
  <button onClick={handleAddButton} type="button" className="btn btn-success kg-button">Add</button>
</div>
</div>

}
export default AddTodo;