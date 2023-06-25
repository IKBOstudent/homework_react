import { useGetMoviesQuery } from "@/redux/store/api";
import { GENRES, TGenre } from "@/redux/store/types";

import styles from "./main.module.css";
import TicketCard from "./components/TicketCard";
import { useAppSelector } from "@/redux/reduxHooks";

interface MoviesProps {
    movieName: string;
    genreFilter: TGenre | null;
    cinemaIdFilter: string | null;
}

export default function MovieList({ movieName, genreFilter, cinemaIdFilter }: MoviesProps) {
    const { data = [], isError, isFetching } = useGetMoviesQuery(cinemaIdFilter);
    const cartItems = useAppSelector((state) => state.cart.cartItems);

    let filteredData = data;

    if (movieName) {
        filteredData = filteredData.filter((item) =>
            item.title.toLowerCase().includes(movieName.toLowerCase()),
        );
    }
    if (genreFilter) {
        filteredData = filteredData.filter((item) => item.genre === genreFilter);
    }

    if (isFetching) {
        return <div className={styles.fallback}>Поиск билетов...</div>;
    }
    if (isError) {
        return <div className={styles.fallback}>Произошла ошибка. Попробуйте снова...</div>;
    }

    if (filteredData.length === 0) {
        return <div className={styles.fallback}>К сожалению, билетов не найдено.</div>;
    }

    return filteredData.map((movie) => (
        <TicketCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genre={GENRES[movie.genre]}
            posterUrl={movie.posterUrl}
            count={cartItems[movie.id]?.count || 0}
            removable={false}
        />
    ));
}
