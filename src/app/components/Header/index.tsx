import React from "react";

import styles from "./header.module.css";

import IconBag from "@/app/assets/icon-bag.svg";
import Link from "next/link";

export default function Header() {
    const cartItemsCount = 5;
    return (
        <header className={styles.root}>
            <Link href="/" className={styles.logo}>
                Билетопоиск
            </Link>
            <div className={styles.cart}>
                <span className={styles.cart_badge}>{cartItemsCount}</span>
                <IconBag className={styles.icon} />
            </div>
        </header>
    );
}
