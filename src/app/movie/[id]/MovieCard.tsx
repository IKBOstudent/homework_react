import Image from "next/image";
import IconButton from "@/app/components/IconButton";
import { useGetMovieByIdQuery } from "@/redux/store/api";
import { GENRES } from "@/redux/store/types";

import styles from "./movie.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { cartActions } from "@/redux/store/cartSlice";

export default function MovieCard({ movieId }: { movieId: string }) {
    const dispatch = useAppDispatch();
    const cartItem = useAppSelector((state) => state.cart.cartItems[movieId]);

    const { data: movie, isFetching, isError } = useGetMovieByIdQuery(movieId);

    if (isFetching) {
        return (
            <div className={`card ${styles.movie_fallback}`}>
                <div className={styles.movie_poster}></div>Загрузка фильма...
            </div>
        );
    }

    if (isError) {
        return <div className={`card ${styles.movie_fallback}`}>Произошла ошибка</div>;
    }

    if (!movie) {
        return <div className={`card ${styles.movie_fallback}`}>Фильм не найден</div>;
    }

    const handleIncrement = () => {
        if (!cartItem) {
            dispatch(
                cartActions.add({
                    id: movie.id,
                    title: movie.title,
                    genre: movie.genre,
                    posterUrl: movie.posterUrl,
                }),
            );
        } else {
            dispatch(cartActions.increment({ id: movie.id }));
        }
    };

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
                            <IconButton
                                icon="minus"
                                onClick={() => dispatch(cartActions.decrement({ id: movie.id }))}
                                disabled={!cartItem}
                            />
                            <span>{cartItem?.count || 0}</span>
                            <IconButton
                                icon="plus"
                                onClick={handleIncrement}
                                disabled={cartItem?.count === 30}
                            />
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
