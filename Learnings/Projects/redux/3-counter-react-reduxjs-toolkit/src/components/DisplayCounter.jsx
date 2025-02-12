import { useSelector } from "react-redux"

const DisplayCounter = () => {

    const counter=useSelector(store=>store.counter);

  return (

    <div>
        <p className="lead mb-4">Counter current value : {counter}</p>
      
    </div>
  )
}

export default DisplayCounter