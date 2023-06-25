import React, { MouseEvent, useCallback, useState } from "react";

import styles from "./ticket-card.module.css";

import Modal from "@/app/components/Modal";
import IconCross from "@/assets/icon-cross.svg";
import IconButton from "@/app/components/IconButton";
import PortalWrapper from "../PortalWrapper";

import { useAppDispatch } from "@/redux/reduxHooks";
import { cartActions } from "@/redux/store/cartSlice";

interface Props {
    id: string;
    count: number;
}

export function CartTicketControlls({ id, count }: Props) {
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = useCallback(
        (approve: boolean) => {
            setIsOpen(false);
            if (approve) {
                dispatch(cartActions.remove({ id }));
            }
        },
        [id, dispatch],
    );

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
                    onClick={count > 1 ? () => dispatch(cartActions.decrement({ id })) : handleOpen}
                    disabled={count === 0}
                />
                <span>{count}</span>
                <IconButton
                    icon="plus"
                    onClick={() => dispatch(cartActions.increment({ id }))}
                    disabled={count === 30}
                />
            </div>
            <IconCross className={styles.icon_close} onClick={handleOpen} />
        </>
    );
}
