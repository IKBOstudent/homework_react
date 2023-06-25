"use client";

import styles from "./movie.module.css";

import MovieCard from "./MovieCard";
import Reviews from "./Reviews";

export default function MoviePage({ params }: { params: { id: string } }) {
    return (
        <div className={styles.root}>
            <MovieCard movieId={params.id} />
            <Reviews movieId={params.id} />
        </div>
    );
}
