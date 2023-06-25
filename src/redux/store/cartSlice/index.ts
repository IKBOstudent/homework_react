import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, { payload }) => {
            state.count++;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
