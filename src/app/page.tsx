"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import styles from "./main.module.css";

import TextInput from "@/app/components/TextInput";
import Dropdown from "@/app/components/Dropdown";
import { TGenre } from "@/redux/store/types";
import MovieList from "./MovieList";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { filterActions } from "@/redux/store/filterSlice";

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

function Search() {
    const dispatch = useAppDispatch();
    const [movieName, setMovieName] = useState<string>(
        useAppSelector((state) => state.filters.movieName),
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(filterActions.setName(movieName.trim()));
        }, 200);

        return () => clearTimeout(timer);
    }, [movieName, dispatch]);

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

function GenreDropdown() {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector((state) => state.filters.genreFilter);
    const selectedItem = genres.findIndex((genre) => genre.id === currentFilter);

    const setGenreFilter = (index: number) => {
        dispatch(filterActions.setGenre(genres[index].id));
    };

    return (
        <Dropdown
            htmlId="dropdown-genre"
            label="Жанр"
            placeholder="Выберите жанр"
            items={genres}
            selectedItem={selectedItem}
            setFilter={setGenreFilter}
        />
    );
}

function CinemaDropdown() {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector((state) => state.filters.cinemaIdFilter);
    const selectedItem = cinemas.findIndex((cinema) => cinema.id === currentFilter);

    const setCinemaIdFilter = (index: number) => {
        dispatch(filterActions.setCinemaId(cinemas[index].id));
    };

    return (
        <Dropdown
            htmlId="dropdown-cinema"
            label="Кинотеатр"
            placeholder="Выберите кинотеатр"
            items={cinemas}
            selectedItem={selectedItem}
            setFilter={setCinemaIdFilter}
        />
    );
}

export default function MainPage() {
    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={`card ${styles.filters_container}`}>
                    <h2 className={styles.filters_header}>Фильтр поиска</h2>
                    <div className={styles.filter_list}>
                        <Search />
                        <GenreDropdown />
                        <CinemaDropdown />
                    </div>
                </div>
            </div>

            <div className={styles.movie_list}>
                <MovieList />
            </div>
        </div>
    );
}
