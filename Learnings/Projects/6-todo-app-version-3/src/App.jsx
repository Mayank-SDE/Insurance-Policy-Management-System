import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
const App = () => {
  let initalTodoItems=[{
    name:"Buy Milk",
    date:"04/11/25"
  },{
    name:"Make Coffee",
    date:"05/11/25"
  }];
  const [todoItems,setTodoItems]=useState(initalTodoItems);
  
  const handleNewItem=(itemName,itemDueDate)=>{
    setTodoItems((prevState)=>{
      return [...prevState,{name:itemName,date:itemDueDate}];
    })
  }
  const handleDeleteItem=(todoItemName)=>{
    setTodoItems((prevState)=>{
      return [...prevState.filter(item=>{
          return item.name!==todoItemName;
      })]
    }
  );
  }

  return (
    <center className="todo-container container">
        <AppName/>
        <AddTodo handleNewItem={handleNewItem}/> 
        {todoItems.length===0 && <WelcomeMessage/>}
        <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems}/>
    </center>
  )
}

export default App