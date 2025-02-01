import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
const App = () => {
   const [calcValue,setCalcValue]=useState("");
   const onButtonClick=(buttonText)=>{

    console.log("Button clicked : ",buttonText);
    if(buttonText==='C')
    {
      setCalcValue("");
    }else if(buttonText==='=')
    {
      const result= eval(calcValue);
      setCalcValue(result);
    }
    else{
      const newDisplayValue=calcValue+buttonText;
      setCalcValue(newDisplayValue);
    }
   }
  return (
    <div className={styles['calculator']}>
      <Display displayValue={calcValue}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App