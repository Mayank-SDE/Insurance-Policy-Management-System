/* eslint-disable react/prop-types */
import styles from "./Item.module.css";
const Item = ({foodItem,bought,handleBuyButton}) => {

  return (
<li className={`${styles['kg-item']}  list-group-item ${bought && 'active'}`}>
  <span className={styles['kg-span']}>
    {foodItem}
  </span>
  <button onClick={handleBuyButton} className={`${styles.button} btn btn-info`}>Buy</button>
  </li>
  )
}

export default Item