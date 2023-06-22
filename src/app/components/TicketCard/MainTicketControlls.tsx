import React from "react";

import styles from "./ticket-card.module.css";

import { useTicketCount } from "@/app/hooks/useTicketCount";
import IconButton from "@/app/components/IconButton";

export function MainTicketControlls({ initialValue }: { initialValue: number }) {
    const { count, increment, decrement } = useTicketCount(initialValue, 30);
    return (
        <div className={styles.buttons}>
            <IconButton icon="minus" onClick={decrement} disabled={count === 0} />
            <span className={styles.count}>{count}</span>
            <IconButton icon="plus" onClick={increment} disabled={count === 30} />
        </div>
    );
}
