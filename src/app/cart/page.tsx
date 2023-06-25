"use client";

import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import TicketCard from "../components/TicketCard";
import { GENRES } from "../page";
import styles from "./cart.module.css";
import { cartActions } from "@/redux/store/cartSlice";

export default function CartPage() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.cart.count);

    const cart = [
        {
            count: 1,
            title: "Властелин колец: Братство Кольца",
            posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
            genre: "fantasy",
            id: "2aT976Fs_Bek0e2ZR_05V",
        },
        {
            count: 5,
            title: "Властелин колец: Две крепости",
            posterUrl: "https://i.postimg.cc/9MfFCgnP/2.webp",
            genre: "fantasy",
            id: "CTzeB2PGEHHBwxCNlU4uo",
        },
        {
            count: 3,
            title: "Властелин колец: Возвращение короля",
            posterUrl: "https://i.postimg.cc/FF8sXZgc/3.webp",
            genre: "fantasy",
            id: "5flr8UOuJz7UuputaZ9iL",
        },
    ];
    return (
        <div className={styles.root}>
            <div className={styles.cart_list}>
                {cart.length > 0 &&
                    cart.map((item) => (
                        <TicketCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            subtitle={GENRES[item.genre]}
                            posterURL={item.posterUrl}
                            initialValue={item.count}
                            removable={true}
                        />
                    ))}
            </div>
            <div className={`card ${styles.total}`}>
                <h3>Итого билетов</h3>
                <span>{cart.reduce((sum, item) => (sum += item.count), 0)}</span>
            </div>
        </div>
    );
}
