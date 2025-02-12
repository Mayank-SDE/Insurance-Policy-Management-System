import { useSelector } from "react-redux"

const DisplayCounter = () => {

    const counterVal=useSelector(store=>store.counter.counterVal);
  
  return (

    <div>
       <p className="lead mb-4">Counter current value : {counterVal}</p>
   
    </div>
  )
}

export default DisplayCounter