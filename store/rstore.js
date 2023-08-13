import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const rstore= configureStore({
    reducer:{
        cart:cartSlice
    }
});
export default rstore;