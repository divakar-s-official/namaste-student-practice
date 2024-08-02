import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

const appStore = configureStore({
    // this reducer basically responsible foor modify the store
    reducer: {
        //for each we have different reducer
        cart : cartReducer,
    },
})

export default appStore;


//for my reference 

//when you click on this add button it dispatches an action 
// it calls the reducer function
//and this function modifies slice of the redux store


//how can we get data from slice 


// we will use a selector