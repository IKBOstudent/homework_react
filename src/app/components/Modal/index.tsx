import React, { MouseEvent, useCallback, useEffect, useRef } from "react";

import IconCross from "@/assets/icon-cross.svg";

import styles from "./modal.module.css";
import TextButton from "@/app/components/TextButton";

interface Props {
    title: string;
    subtitle: string;
    closeModal: (approve: boolean) => void;
}

export default function Modal({ title, subtitle, closeModal }: Props) {
    const modalRef = useRef<HTMLDivElement>(null);

    const clickOutsideHandler = useCallback(
        (e: Event) => {
            const { target } = e;
            if (target instanceof Node && !modalRef.current?.contains(target)) {
                closeModal(false);
            }
        },
        [modalRef, closeModal],
    );

    useEffect(() => {
        window.addEventListener("click", clickOutsideHandler);
        return () => window.removeEventListener("click", clickOutsideHandler);
    }, [clickOutsideHandler]);

    return (
        <div className="modal-wrapper">
            <div className={`card ${styles.root}`} ref={modalRef}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {title}
                        <IconCross className={styles.icon} onClick={() => closeModal(false)} />
                    </div>
                    <span>{subtitle}</span>
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
        </div>
    );
}
