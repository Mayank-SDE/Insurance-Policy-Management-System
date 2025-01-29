/* eslint-disable react/prop-types */
import styles from "./Item.module.css";
const Item = ({foodItem}) => {

  const handleBuyButtonClicked=(event)=>{
    console.log(event);
    console.log(event.target.value);
    console.log(`Item being bought ${foodItem}`);
  }
  return (
<li className={`${styles['kg-item']}  list-group-item`}>
  <span className={styles['kg-span']}>
    {foodItem}
  </span>
  <button onClick={(event)=>handleBuyButtonClicked(event)} className={`${styles.button} btn btn-info`}>Buy</button>
  </li>
  )
}

export default Item