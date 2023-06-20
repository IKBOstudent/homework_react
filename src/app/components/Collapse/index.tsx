import React, { useState } from "react";

import IconArrow from "@/app/assets/icon-arrow.svg";

import styles from "./collapse.module.css";

interface Props {
    title: string;
    text: string;
}

export default function Collapse({ title, text }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className={styles.root}>
            <div className={styles.title} onClick={toggle}>
                {title}
                <IconArrow
                    className={styles.icon}
                    style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                />
            </div>
            {isOpen && <p className={styles.text}>{text}</p>}
        </div>
    );
}
