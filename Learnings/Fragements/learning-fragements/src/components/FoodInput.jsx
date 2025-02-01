/* eslint-disable react/prop-types */
import styles from './FoodInput.module.css';
const FoodInput = ({handleKeyDown}) => {
  
  return (
    <input type="text" placeholder="Enter the food item here." className={styles.foodInput} onKeyDown={handleKeyDown} />
)
}

export default FoodInput