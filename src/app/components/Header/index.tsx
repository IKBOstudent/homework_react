import React from "react";

import styles from "./header.module.css";

import IconBag from "@/assets/icon-bag.svg";
import Link from "next/link";

export default function Header() {
    const cartItemsCount = 5;
    return (
        <header className={styles.root}>
            <Link href="/" className={styles.logo}>
                Билетопоиск
            </Link>
            <div className={styles.cart}>
                <span>{cartItemsCount}</span>
                <Link href="/cart">
                    <IconBag className={styles.icon} />
                </Link>
            </div>
        </header>
    );
}
