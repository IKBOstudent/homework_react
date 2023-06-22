import React from "react";

import IconCross from "@/app/assets/icon-cross.svg";

import styles from "./modal.module.css";
import TextButton from "@/app/components/TextButton";

interface Props {
    title: string;
    subtitle: string;
    closeModal: (approve: boolean) => void;
}

export default function Modal({ title, subtitle, closeModal }: Props) {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.title}>
                    {title}
                    <IconCross className={styles.icon} onClick={() => closeModal(false)} />
                </div>
                <span className={styles.subtitle}>{subtitle}</span>
            </div>
            <div className={styles.buttons}>
                <TextButton variant="filled" onClick={() => closeModal(true)}>
                    Да
                </TextButton>
                <TextButton variant="outlined" onClick={() => closeModal(false)}>
                    Нет
                </TextButton>
            </div>
        </div>
    );
}
