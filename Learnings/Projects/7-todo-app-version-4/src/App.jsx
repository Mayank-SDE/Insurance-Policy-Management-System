import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";

import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";


const App = () => {

  
  return (
    <TodoItemsContextProvider>
    <center className="todo-container container">
        <AppName/>
        <AddTodo/> 
        <WelcomeMessage />
        <TodoItems />
    </center>
    </TodoItemsContextProvider>
  )
}

export default App