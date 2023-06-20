import React from "react";

import IconCross from "@/app/assets/icon-cross.svg";

import styles from "./modal.module.css";
import TextButton from "@/app/components/TextButton";

interface Props {
    title: string;
    subtitle: string;
}

export default function Modal({ title, subtitle }: Props) {
    function handleCloseModal() {
        console.log("close modal");
    }
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.title}>
                    {title}
                    <IconCross className={styles.icon} onClick={handleCloseModal} />
                </div>
                <span className={styles.subtitle}>{subtitle}</span>
            </div>
            <div className={styles.buttons}>
                <TextButton content="Да" style="filled" onClick={() => console.log("Да")} />
                <TextButton content="Нет" style="outlined" onClick={() => console.log("Нет")} />
            </div>
        </div>
    );
}
