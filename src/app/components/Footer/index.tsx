import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
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
