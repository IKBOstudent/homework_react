import Image from "next/image";
import IconButton from "@/app/components/IconButton";
import { useTicketCount } from "@/app/hooks/useTicketCount";
import { useGetMovieByIdQuery } from "@/redux/store/api";
import { GENRES } from "@/redux/store/types";

import styles from "./movie.module.css";

export default function MovieCard({ movieId }: { movieId: string }) {
    const { count, increment, decrement } = useTicketCount(0, 30);

    const { data: movie, isFetching, isError } = useGetMovieByIdQuery(movieId);

    if (isFetching) {
        return <div className={`card ${styles.movie_fallback}`}>Идет загрузка фильма...</div>;
    }

    if (isError) {
        return <div className={`card ${styles.movie_fallback}`}>Произошла ошибка</div>;
    }

    if (!movie) {
        return <div className={`card ${styles.movie_fallback}`}>Фильм не найден</div>;
    }

    return (
        <div className={`card ${styles.movie_card}`}>
            {movie.posterUrl ? (
                <Image
                    className={styles.movie_poster}
                    width={400}
                    height={500}
                    src={movie.posterUrl}
                    alt="movie-poster"
                    priority
                />
            ) : (
                <div className={styles.movie_poster}></div>
            )}
            <section className={styles.movie_content}>
                <div className={styles.movie_header_content}>
                    <div className={styles.movie_header_head}>
                        <h1>{movie.title}</h1>
                        <div className={styles.buttons}>
                            <IconButton icon="minus" onClick={decrement} disabled={count === 0} />
                            <span>{count}</span>
                            <IconButton icon="plus" onClick={increment} disabled={count === 30} />
                        </div>
                    </div>
                    <div className={styles.movie_header_info_list}>
                        <div className={styles.movie_header_info_item}>
                            <h4>Жанр:</h4>
                            <span>{GENRES[movie.genre]}</span>
                        </div>

                        <div className={styles.movie_header_info_item}>
                            <h4>Год выпуска:</h4>
                            <span>{movie.releaseYear}</span>
                        </div>

                        <div className={styles.movie_header_info_item}>
                            <h4>Рейтинг:</h4>
                            <span>{movie.rating}</span>
                        </div>

                        <div className={styles.movie_header_info_item}>
                            <h4>Режиссер:</h4>
                            <span>{movie.director}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.movie_description}>
                    <h4>Описание</h4>
                    <p>{movie.description}</p>
                </div>
            </section>
        </div>
    );
}
