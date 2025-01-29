import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
 let foodItems=['Avacado','Apple','Dal Khicdi','Nutrella','Egg','Almonds'];
  return (
    <>

     <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}/>
        <FoodInput/>
        <FoodItems items={foodItems}/>
    </Container>
    <Container>
      <p>Above food are good for your health and well bieng.</p>
    </Container>
    </>
  )
}

export default App
