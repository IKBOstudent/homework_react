"use client";

import React from "react";

import styles from "./header.module.css";

import IconBag from "@/assets/icon-bag.svg";
import Link from "next/link";
import { useAppSelector } from "@/redux/reduxHooks";

export default function Header() {
    const cartItemsCount = useAppSelector((state) => state.cart.total);

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
