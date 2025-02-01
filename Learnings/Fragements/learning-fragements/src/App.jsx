import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
 
  const [foodItems,setFoodItems]=useState(['Avacado','Apple','Dal Khicdi','Nutrella','Egg','Almonds']);

 const onKeyDownHandler=(event)=>{
  if(event.key==='Enter')
  {
    let newFoodItem=event.target.value;
    event.target.value="";
    console.log("Food value entered is : "+newFoodItem);
    let newItems=[...foodItems,newFoodItem];
    setFoodItems(newItems);
  }
}
  return (
    <>

     <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDownHandler}/>
        <ErrorMessage items={foodItems}/>
        <FoodItems items={foodItems}/>
    </Container>
    <Container>
      <p>Above food are good for your health and well bieng.</p>
    </Container>
    </>
  )
}

export default App
