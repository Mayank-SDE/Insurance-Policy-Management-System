/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';
const TodoItems=({todoItems})=>{
    return <div className={styles['items-container']}>
          {todoItems.map((item)=>{
            return <TodoItem key={item.todoDate} todoDate={item.date} todoName={item.name}/>
          })}
        </div>;
}
export default TodoItems;