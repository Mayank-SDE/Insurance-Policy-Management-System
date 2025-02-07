import { useContext, useRef} from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo(){
 
  const todoNameElement=useRef();
  const todoDueDateElement=useRef();

  const context=useContext(TodoItemsContext);
  const addNewItem=context.addNewItem;

  const handleAddButton=(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=todoDueDateElement.current.value;
    todoDueDateElement.current.value="";
    todoNameElement.current.value="";
    addNewItem(todoName,dueDate);

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