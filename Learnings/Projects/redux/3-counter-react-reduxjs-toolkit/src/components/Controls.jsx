import { useRef } from "react";
import { useDispatch } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue } from "../store/counter";
import { toggle } from "../store/privacy";

const Controls = () => {
    const inputRef=useRef();
    const dispatch=useDispatch();
    const handleIncrement=()=>{
        dispatch(increment());
    }
    const handleDecrement=()=>{
        dispatch(decrement());
    }
    const handleAdd=()=>{
        dispatch(incrementByValue({value: +inputRef.current.value}));
    }
    const handleSubtract=()=>{
        dispatch(decrementByValue({value: +inputRef.current.value}));
    }

    const handlePrivacyToggle=()=>{
        console.log("Clicked");
        dispatch(toggle());
    }

  return (<>
  
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button onClick={handleIncrement} type="button" className="btn btn-primary">+1</button>
      <button onClick={handleDecrement} type="button" className="btn btn-success">-1</button>
      <button type="button" onClick={handlePrivacyToggle} className="btn btn-warning">Privacy Toggle</button>
    </div>
    
    <div className="control-row d-grid gap-2 d-sm-flex justify-content-sm-center">
      <input ref={inputRef} type="text" className="number-input" placeholder="Enter number" />
      <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
      
      <button onClick={handleSubtract} type="button" className="btn btn-danger">Subtract</button>
    </div>
  </>
  )
}

export default Controls