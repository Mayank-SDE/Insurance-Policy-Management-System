import { useRef} from "react";
import { IoMdAdd } from "react-icons/io";

/* eslint-disable react/prop-types */
function AddTodo({handleNewItem}){
 
  const todoNameElement=useRef();
  const todoDueDateElement=useRef();

  const handleAddButton=(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=todoDueDateElement.current.value;
    todoDueDateElement.current.value="";
    todoNameElement.current.value="";
    handleNewItem(todoName,dueDate);

  }
return  <form onSubmit={handleAddButton} className="row kg-row">
<div className="col-6">
  <input type="text" ref={todoNameElement} placeholder="Enter Todo"  />
</div>
<div className="col-4">
  <input type="date" ref={todoDueDateElement}  />
</div>
<div className="col-2">
  <button className="btn btn-success kg-button">
    <IoMdAdd/>
  </button>
</div>
</form>

}
export default AddTodo;