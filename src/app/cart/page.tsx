"use client";

import { useAppSelector } from "@/redux/reduxHooks";
import TicketCard from "../components/TicketCard";
import styles from "./cart.module.css";

export default function CartPage() {
    const items = useAppSelector((state) => state.cart.cartItems);
    const cartKeys = Object.keys(items);

    if (cartKeys.length === 0) {
        return <div className={styles.fallback}>Ваша корзина пуста.</div>;
    }

    return (
        <div className={styles.root}>
            <div className={styles.cart_list}>
                {cartKeys.map((key) => (
                    <TicketCard
                        key={key}
                        id={key}
                        title={items[key].title}
                        genre={items[key].genre}
                        posterUrl={items[key].posterUrl}
                        count={items[key].count}
                        removable={true}
                    />
                ))}
            </div>
            <div className={`card ${styles.total}`}>
                <h3>Итого билетов</h3>
                <span>{cartKeys.reduce((sum, key) => (sum += items[key].count), 0)}</span>
            </div>
        </div>
    );
}
