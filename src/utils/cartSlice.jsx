import { createSlice } from "@reduxjs/toolkit";


//createSlice function takes a configuration to creaqte a slice
const cartSlice = createSlice({
    name: "cart",
    //the second configuration is the initial state 
    initialState: {
        items : [],
       
    },
    reducers: {
        // write reducer fn() corresponding to those actions
        //so what can be different types of actions in a cart 
        //add, remove , clear items in a cart


        // the action is basically the add Item and the reducer fn() is basically the fn()
        addItem: (state, action) => {
            //basically modfies the slice of store
            console.log(action);

            state.items.push(action.payload)
            

        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }

});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

