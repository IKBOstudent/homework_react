import { useGetMoviesQuery } from "@/redux/store/api";
import { GENRES } from "@/redux/store/types";

import styles from "./main.module.css";
import TicketCard from "./components/TicketCard";
import { useAppSelector } from "@/redux/reduxHooks";
import { getFilteredMovies } from "@/redux/store/filterSlice";

export default function MovieList() {
    const filters = useAppSelector((state) => state.filters);
    const cartItems = useAppSelector((state) => state.cart.cartItems);

    const { filteredData, isError, isFetching } = useGetMoviesQuery(
        filters.cinemaIdFilter,
        {
            selectFromResult: (result) => ({
                ...result,
                filteredData: getFilteredMovies({
                    data: result.data,
                    movieName: filters.movieName,
                    genreFilter: filters.genreFilter,
                }),
            }),
        }
    );
    if (isFetching) {
        return <div className={styles.fallback}>Поиск билетов...</div>;
    }
    if (isError) {
        return (
            <div className={styles.fallback}>
                Произошла ошибка. Попробуйте снова...
            </div>
        );
    }

    if (filteredData.length === 0) {
        return (
            <div className={styles.fallback}>К сожалению, билетов не найдено.</div>
        );
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
