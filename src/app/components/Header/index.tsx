"use client";

import React from "react";

import styles from "./header.module.css";

import IconBag from "@/assets/icon-bag.svg";
import Link from "next/link";
import { useAppSelector } from "@/redux/reduxHooks";

export default function Header() {
    const items = useAppSelector((state) => state.cart.cartItems);
    const cartItemsCount = Object.keys(items).reduce((sum, key) => (sum += items[key].count), 0);

    return (
        <header className={styles.root}>
            <Link href="/" className={styles.logo}>
                Билетопоиск
            </Link>
            <div className={styles.cart}>
                {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
                <Link href="/cart">
                    <IconBag className={styles.icon} />
                </Link>
            </div>
        </header>
    );
}
