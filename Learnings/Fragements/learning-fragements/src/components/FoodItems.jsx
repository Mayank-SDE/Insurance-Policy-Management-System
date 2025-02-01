/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item"

const FoodItems = ({items}) => {
  
  let [activeItems,setActiveItems] =useState([]);
  
   const handleBuyButtonClicked=(event,item)=>{
    setActiveItems((prevState)=>[...prevState,item]);
  }
     
  return (
    <ul className="list-group">
        {items.length!==0 && items.map((item)=>{
          return <Item bought={activeItems.includes(item)} handleBuyButton={(event)=>handleBuyButtonClicked(event,item)}  key={item} foodItem={item} />
        })}
        </ul>
  )
}

export default FoodItems