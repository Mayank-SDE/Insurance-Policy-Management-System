import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        counterVal:0
    },
    reducers:{
        increment:(state)=>{
            state.counterVal++;
        },
        decrement:(state)=>{
            state.counterVal--;
        },
        incrementByValue:(state,action)=>{
            state.counterVal += action.payload.value;
        
        },
        decrementByValue:(state,action)=>{
            state.counterVal -= action.payload.value;
        }
    }
})
export const {increment,decrement,incrementByValue,decrementByValue}=counterSlice.actions;
export default counterSlice;