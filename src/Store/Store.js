import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './productSlice'

const store = configureStore({

    reducer:{
        cart:cartReducer,
        product:productReducer,
    },
     
   
});

export default store;