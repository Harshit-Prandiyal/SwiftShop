import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";
import productsSliceReducer from './slices/productsSLice'
import favouriteSliceReducer from './slices/favouriteSlice';
import yourordersSliceReducer from './slices/yourOrdersSlice';
export const store = configureStore({
    reducer:{
        MyCart:cartSliceReducer,
        Products:productsSliceReducer,
        Favourites:favouriteSliceReducer,
        YourOrders:yourordersSliceReducer,
    }
});