const redux=require("redux");
const INITIAL_VALUE={
    counter:1
};
const reducer=(store=INITIAL_VALUE,action)=>{
    let newStore=store;
    if(action.type==='INCREMENT'){
        newStore={counter:newStore.counter+1}
    }else if(action.type==='DECREMENT'){
        newStore={counter:newStore.counter-1}
    }else if(action.type==='ADDITION'){
        newStore={counter:newStore.counter+action.payload.value}
    }
    return newStore;
}
const store=redux.createStore(reducer);

const subscriber=()=>{
    const state=store.getState();
    console.log(state);
}
store.subscribe(subscriber);

store.dispatch({
    type:"ADDITION",
    payload:{
        value:5   
    }
})


store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});

store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});

store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});

store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'DECREMENT'});

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
