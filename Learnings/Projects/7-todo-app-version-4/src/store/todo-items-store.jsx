/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
export const TodoItemsContext=createContext({
  todoItems:[],
  addNewItem:()=>{},
  deleteItem:()=>{}
});
const todoItemsReducer=(state,action)=>{
  let newTodoItems=state;
  if(action.type==='NEW_ITEM')
  { 
    newTodoItems=[...state,{
      name:action.payload.itemName,
      dueDate:action.payload.itemDueDate
    }];
    
  }else if(action.type==='DELETE_ITEM'){
    newTodoItems=newTodoItems.filter(item=>{
      return item.name!==action.payload.itemName
    })
  }
  return newTodoItems;
}

const TodoItemsContextProvider=({children})=>{
  let initalTodoItems=[{
    name:"Buy Milk",
    date:"04/11/25"
  },{
    name:"Make Coffee",
    date:"05/11/25"
  }];
  const [todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,initalTodoItems);

  const addNewItem=(itemName,itemDueDate)=>{
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    }
    dispatchTodoItems(newItemAction);
  }
  const deleteItem=(todoItemName)=>{
    
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        itemName:todoItemName
      }
    }
    dispatchTodoItems(deleteItemAction);
  
  }

  return <TodoItemsContext.Provider value={{
    todoItems,
    addNewItem,
    deleteItem
    }
    }>{children}</TodoItemsContext.Provider>;
}
export default TodoItemsContextProvider;
  