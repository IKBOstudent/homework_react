import React, {
    MouseEvent,
    ReactNode,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import styles from "./ticket-card.module.css";

import { useTicketCount } from "@/app/hooks/useTicketCount";
import Modal from "@/app/components/Modal";
import IconCross from "@/assets/icon-cross.svg";
import IconButton from "@/app/components/IconButton";
import PortalWrapper from "../PortalWrapper";

export function CartTicketControlls({ initialValue }: { initialValue: number }) {
    const { count, increment, decrement } = useTicketCount(initialValue, 30);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = useCallback((approve: boolean) => {
        setIsOpen(false);
        console.log(approve ? "Delete" : "Keep");
        if (approve) {
            // TODO
        }
    }, []);

    const handleOpen = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsOpen(true);
    };

    return (
        <>
            {isOpen && (
                <PortalWrapper containerSelector="#modal-container">
                    <Modal
                        title="Удаление билета"
                        subtitle="Вы уверены, что хотите удалить билет?"
                        closeModal={handleClose}
                    />
                </PortalWrapper>
            )}
            <div className={styles.buttons}>
                <IconButton
                    icon="minus"
                    onClick={count > 1 ? decrement : handleOpen}
                    disabled={count === 0}
                />
                <span>{count}</span>
                <IconButton icon="plus" onClick={increment} disabled={count === 30} />
            </div>
            <IconCross className={styles.icon_close} onClick={handleOpen} />
        </>
    );
}
