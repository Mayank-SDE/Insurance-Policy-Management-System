import { useContext } from 'react';
import styles from './WelcomeMessage.module.css';
import { TodoItemsContext } from '../store/todo-items-store';
const WelcomeMessage = () => {
  const context=useContext(TodoItemsContext);
  const todoItems=context.todoItems;
  return (
    todoItems.length===0 && 
    <p className={styles.welcome}>Enjoy your day !!</p>
  )
}

export default WelcomeMessage