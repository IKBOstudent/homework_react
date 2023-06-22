import React, { useState } from "react";
import { createPortal } from "react-dom";

import styles from "./ticket-card.module.css";

import { useTicketCount } from "@/app/hooks/useTicketCount";
import Modal from "@/app/components/Modal";
import IconCross from "@/app/assets/icon-cross.svg";
import IconButton from "@/app/components/IconButton";

export function CartTicketControlls({ initialValue }: { initialValue: number }) {
    const { count, increment, decrement } = useTicketCount(initialValue, 30);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = (approve: boolean) => {
        setIsOpen(false);
        console.log(approve ? "Delete" : "Keep");
        if (approve) {
            // TODO
        }
    };

    const handleCallModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            {isOpen &&
                createPortal(
                    <div className="modal-wrapper" onClick={() => handleClose(false)}>
                        <Modal
                            title="Удаление билета"
                            subtitle="Вы уверены, что хотите удалить билет?"
                            closeModal={handleClose}
                        />
                    </div>,
                    document.body
                )}
            <div className={styles.buttons}>
                <IconButton
                    icon="minus"
                    onClick={count > 1 ? decrement : handleCallModal}
                    disabled={count === 0}
                />
                <span className={styles.count}>{count}</span>
                <IconButton icon="plus" onClick={increment} disabled={count === 30} />
            </div>
            <IconCross className={styles.icon_close} onClick={handleCallModal} />
        </>
    );
}
