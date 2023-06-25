import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./ticket-card.module.css";

import { MainTicketControlls } from "./MainTicketControlls";
import { CartTicketControlls } from "./CartTicketControlls";

interface Props {
    id: string;
    title: string;
    genre: string;
    posterUrl?: string;
    count: number;
    removable: boolean;
}

export default function TicketCard({ id, title, genre, posterUrl, count, removable }: Props) {
    if (removable && count === 0) {
        return null;
    }

    return (
        <div className={`card ${styles.root}`}>
            {posterUrl ? (
                <Image
                    width={100}
                    height={120}
                    src={posterUrl}
                    alt="movie poster"
                    className={styles.image}
                    priority
                />
            ) : (
                <div className={styles.no_image}></div>
            )}
            <div className={styles.main}>
                <Link href={`/movie/${id}`}>{title}</Link>
                <span>{genre}</span>
            </div>

            {removable ? (
                <CartTicketControlls id={id} count={count} />
            ) : (
                <MainTicketControlls
                    id={id}
                    title={title}
                    genre={genre}
                    posterUrl={posterUrl}
                    count={count}
                />
            )}
        </div>
    );
}
