"use client";

import React, { useEffect, useMemo, useState } from "react";

import styles from "./main.module.css";

import TextInput from "@/app/components/TextInput";
import Dropdown from "@/app/components/Dropdown";
import TicketCard from "@/app/components/TicketCard";
import { useGetMoviesQuery } from "@/redux/store/api";
import { GENRES, TGenre, TMovie } from "@/redux/store/types";

export interface IDropdownTypes {
    id: string | null;
    name: string;
}

const genres: { id: TGenre | null; name: string }[] = [
    { id: null, name: "Не выбрано" },
    { id: "action", name: "Боевик" },
    { id: "comedy", name: "Комедия" },
    { id: "fantasy", name: "Фэнтези" },
    { id: "horror", name: "Ужасы" },
];

const cinemas: IDropdownTypes[] = [
    { id: null, name: "Не выбрано" },
    { id: "CTfrB5PGEJHBwxCNlU4uo", name: "Синема сад" },
    { id: "2a2976KdjBek0e2ZR_07V", name: "4 с половиной звезды" },
    { id: "4gJr8UOYvT7UuprciZ4iL", name: "Дружба" },
];

interface MoviesProps {
    movieName: string;
    genreFilter: TGenre | null;
    cinemaIdFilter: string | null;
}

function Movies({ movieName, genreFilter, cinemaIdFilter }: MoviesProps) {
    const { data = [], isError, isFetching } = useGetMoviesQuery(cinemaIdFilter);

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

    return filteredData.map((movie, i) => (
        <TicketCard
            key={i}
            id={movie.id}
            title={movie.title}
            subtitle={GENRES[movie.genre]}
            posterURL={movie.posterUrl}
            initialValue={0}
            removable={false}
        />
    ));
}

export default function MainPage() {
    const [movieName, setMovieName] = useState<string>("");
    const [genreFilter, setGenreFilter] = useState<TGenre | null>(null);
    const [cinemaIdFilter, setCinemaIdFilter] = useState<string | null>(null);

    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={`card ${styles.filters_container}`}>
                    <h2 className={styles.filters_header}>Фильтр поиска</h2>
                    <div className={styles.filter_list}>
                        <TextInput
                            htmlId="input-name"
                            label="Название"
                            placeholder="Введите название"
                            value={movieName}
                            onChange={(e) => setMovieName(e.target.value)}
                        />

                        <Dropdown
                            htmlId="dropdown-genre"
                            label="Жанр"
                            placeholder="Выберите жанр"
                            items={genres}
                            setFilter={(index: number) => setGenreFilter(genres[index].id)}
                        />

                        <Dropdown
                            htmlId="dropdown-cinema"
                            label="Кинотеатр"
                            placeholder="Выберите кинотеатр"
                            items={cinemas}
                            setFilter={(index: number) => setCinemaIdFilter(cinemas[index].id)}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.movie_list}>
                <Movies
                    movieName={movieName}
                    genreFilter={genreFilter}
                    cinemaIdFilter={cinemaIdFilter}
                />
            </div>
        </div>
    );
}
