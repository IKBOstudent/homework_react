import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./ticket-card.module.css";

import { MainTicketControlls } from "./MainTicketControlls";
import { CartTicketControlls } from "./CartTicketControlls";

interface Props {
    id: string;
    title: string;
    subtitle: string;
    posterURL?: string;
    initialValue: number;
    removable: boolean;
}

export default function TicketCard({
    id,
    title,
    subtitle,
    posterURL,
    initialValue,
    removable,
}: Props) {
    if (removable && initialValue === 0) {
        return null;
    }

    return (
        <div className={`card ${styles.root}`}>
            {posterURL ? (
                <Image
                    width={100}
                    height={120}
                    src={posterURL}
                    alt="movie poster"
                    className={styles.image}
                    priority
                />
            ) : (
                <div className={styles.no_image}></div>
            )}
            <div className={styles.main}>
                <Link href={`/movie/${id}`}>{title}</Link>
                <span>{subtitle}</span>
            </div>

            {removable ? (
                <CartTicketControlls initialValue={initialValue} />
            ) : (
                <MainTicketControlls initialValue={initialValue} />
            )}
        </div>
    );
}
