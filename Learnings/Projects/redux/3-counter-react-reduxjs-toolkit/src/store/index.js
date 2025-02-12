import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter';
import privacySlice from './privacy';


const store=configureStore({
    reducer:{
        counter:counterSlice.reducer,
        privacy:privacySlice.reducer
    }
});

export default store;