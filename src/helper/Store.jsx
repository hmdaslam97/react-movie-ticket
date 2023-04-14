import { configureStore } from "@reduxjs/toolkit";
// import { customeReducer } from "./Reducer";
import mainReducer from "../Reducers";

// const store=configureStore( {  reducers:{}, } )
const store = configureStore({
    reducer: {
        custom:mainReducer,
    },
})

export default store;