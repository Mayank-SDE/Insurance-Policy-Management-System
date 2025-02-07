import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItems=()=>{

      const {todoItems}=useContext(TodoItemsContext);
    return <div className={styles['items-container']}>
          {todoItems.map((item)=>{
            return (<TodoItem key={item.name} todoDate={item.date} todoName={item.name}/>)
          })}
        </div>;
}
export default TodoItems;