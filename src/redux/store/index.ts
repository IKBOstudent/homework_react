import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { movieApi } from "./api";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat([movieApi.middleware]),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
