import React from "react";
import Image from "next/image";

import styles from "./ticket-card.module.css";

import { MainTicketControlls } from "./MainTicketControlls";
import { CartTicketControlls } from "./CartTicketControlls";
import Link from "next/link";

interface Props {
    id: string;
    title: string;
    subtitle: string;
    posterURL: string;
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
        // can't appear in cart
        return null;
    }

    return (
        <div className={styles.root}>
            {Boolean(posterURL) ? (
                <Image
                    width={100}
                    height={120}
                    src={posterURL}
                    alt="film poster"
                    className={styles.image}
                    priority
                />
            ) : (
                <div className={styles.no_image}></div>
            )}
            <div className={styles.main}>
                <Link href={`/film/${id}`} className={styles.title}>
                    {title}
                </Link>
                <span className={styles.subtitle}>{subtitle}</span>
            </div>

            {removable ? (
                <CartTicketControlls initialValue={initialValue} />
            ) : (
                <MainTicketControlls initialValue={initialValue} />
            )}
        </div>
    );
}
