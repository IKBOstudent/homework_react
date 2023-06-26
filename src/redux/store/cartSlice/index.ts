import { createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "../types";

interface IState {
    cartItems: Record<string, TCartItem>;
    total: number;
}

const initialState: IState = {
    cartItems: {},
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, { payload }) => {
            if (!state.cartItems[payload.id]) {
                state.cartItems = {
                    ...state.cartItems,
                    [payload.id]: {
                        title: payload.title,
                        posterUrl: payload.posterUrl,
                        genre: payload.genre,
                        count: 1,
                    },
                };

                state.total++;
            }
        },
        increment: (state, { payload }) => {
            let items = { ...state.cartItems };
            if (items[payload.id] && items[payload.id].count < 30) {
                items[payload.id].count++;
                state.cartItems = items;

                state.total++;
            }
        },
        decrement: (state, { payload }) => {
            let items = { ...state.cartItems };

            if (items[payload.id]) {
                items[payload.id].count--;
                if (items[payload.id].count === 0) {
                    delete items[payload.id];
                }
                state.cartItems = items;

                state.total--;
            }
        },
        remove: (state, { payload }) => {
            let items = { ...state.cartItems };
            if (items[payload.id]) {
                state.total -= items[payload.id].count;

                delete items[payload.id];
                state.cartItems = items;
            }
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
