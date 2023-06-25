import React from "react";

import styles from "./ticket-card.module.css";

import IconButton from "@/app/components/IconButton";
import { useAppDispatch } from "@/redux/reduxHooks";
import { cartActions } from "@/redux/store/cartSlice";

interface Props {
    id: string;
    title: string;
    genre: string;
    posterUrl?: string;
    count: number;
}

export function MainTicketControlls({ id, title, genre, posterUrl, count }: Props) {
    const dispatch = useAppDispatch();

    function handleIncrement() {
        console.log(count);
        if (count === 0) {
            dispatch(cartActions.add({ id, title, genre, posterUrl }));
        } else {
            dispatch(cartActions.increment({ id }));
        }
    }

    return (
        <div className={styles.buttons}>
            <IconButton
                icon="minus"
                onClick={() => dispatch(cartActions.decrement({ id }))}
                disabled={count === 0}
            />
            <span>{count}</span>
            <IconButton icon="plus" onClick={handleIncrement} disabled={count === 30} />
        </div>
    );
}
