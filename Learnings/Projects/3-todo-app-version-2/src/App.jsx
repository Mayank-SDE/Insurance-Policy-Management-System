import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
const App = () => {
  let todoItems=[{
    name:"Buy Milk",
    date:"04/11/25"
  },{
    name:"Make Coffee",
    date:"05/11/25"
  }];
  return (
    <center className="todo-container container">
        <AppName/>
        <AddTodo/> 
        <TodoItems todoItems={todoItems}/>
    </center>
  )
}

export default App