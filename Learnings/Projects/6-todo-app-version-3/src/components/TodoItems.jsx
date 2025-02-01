/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';
const TodoItems=({todoItems,onDeleteClick})=>{
    return <div className={styles['items-container']}>
          {todoItems.map((item)=>{
            return (<TodoItem onDeleteClick={onDeleteClick} key={item.name} todoDate={item.date} todoName={item.name}/>)
          })}
        </div>;
}
export default TodoItems;