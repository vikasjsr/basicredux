import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    c : 0,
}



export const customReducer = createReducer(initialState,{

    increment: (state, action) => {
        state.c += 1;
    },

    // action is used when a parameter is passed
    incrementbyvalue : (state, action) => {
        state.c += action.payload;
    },

    decrement: (state) => {
        state.c = state.c - 1;
    },
    // this is the action that will be called when the action is dispatched
}); /*  1)initial state  2)multiple reducer  */



