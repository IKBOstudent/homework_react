import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { movieApi } from "./api";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filters: filterReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat([movieApi.middleware]),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
