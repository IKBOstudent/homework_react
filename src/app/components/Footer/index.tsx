import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
    const cartItemsCount = 5 + Math.floor(Math.random() * 10);
    return (
        <footer className={styles.root}>
            <Link href="/qa" className={styles.link}>
                Вопросы-ответы
            </Link>
            <Link href="/about" className={styles.link}>
                О нас
            </Link>
        </footer>
    );
}
