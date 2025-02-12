import {createStore} from 'redux';

const INITIAL_VALUE={
    counter:0,
    privacy:false
}

const counterReducer=(store=INITIAL_VALUE,action)=>{
    let newStore=store;
    if(action.type==="INCREMENT")
    {
        newStore={
            ...newStore,

            counter : newStore.counter+1
        }
    }else if(action.type==="DECREMENT")
        {
            
            newStore={
                ...newStore,
                counter : newStore.counter-1
            }
        }
        else if(action.type==="ADD")
            {
                
                newStore={
                    ...newStore,
                    counter : newStore.counter+ +action.payload.value
                }
            }
            else if(action.type==="SUB")
            {
                    
                newStore={
                    ...newStore,
                    counter : newStore.counter- +action.payload.value
                }
            } else if(action.type==="PRIVACY_TOGGLE")
                {
                   newStore={
                    ...newStore,
                        privacy :!newStore.privacy           
                    }
                }
                  
                            
    return newStore;
}

const counterStore=createStore(counterReducer);

export default counterStore;