"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import styles from "./main.module.css";

import TextInput from "@/app/components/TextInput";
import Dropdown from "@/app/components/Dropdown";
import { GENRES, TGenre, TMovie } from "@/redux/store/types";
import MovieList from "./MovieList";

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

function Search({ setDebounced }: { setDebounced: (newVal: string) => void }) {
    const [movieName, setMovieName] = useState<string>("");

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(movieName), 200);
        return () => clearTimeout(timer);
    }, [movieName, setDebounced]);

    return (
        <TextInput
            htmlId="input-name"
            label="Название"
            placeholder="Введите название"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
        />
    );
}

export default function MainPage() {
    const [debouncedMovieName, setDebouncedMovieName] = useState<string>("");

    const [genreFilter, setGenreFilter] = useState<TGenre | null>(null);
    const [cinemaIdFilter, setCinemaIdFilter] = useState<string | null>(null);

    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={`card ${styles.filters_container}`}>
                    <h2 className={styles.filters_header}>Фильтр поиска</h2>
                    <div className={styles.filter_list}>
                        <Search setDebounced={setDebouncedMovieName} />

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
                <MovieList
                    movieName={debouncedMovieName}
                    genreFilter={genreFilter}
                    cinemaIdFilter={cinemaIdFilter}
                />
            </div>
        </div>
    );
}
