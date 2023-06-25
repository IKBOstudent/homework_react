import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { TGenre, TMovie } from "../types";
import { RootState } from "..";
import { movieApi } from "../api";

interface IState {
    movieName: string;
    genreFilter?: TGenre | null;
    cinemaIdFilter?: string | null;
}
const initialState: IState = {
    movieName: "",
    genreFilter: undefined,
    cinemaIdFilter: undefined,
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setName: (state, { payload }: PayloadAction<string>) => {
            state.movieName = payload;
        },
        setGenre: (state, { payload }: PayloadAction<TGenre | null>) => {
            state.genreFilter = payload;
        },
        setCinemaId: (state, { payload }: PayloadAction<string | null>) => {
            state.cinemaIdFilter = payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;

export const getMovieNameFilter = (state: RootState) => state.filters.movieName;
export const getGenreFilter = (state: RootState) => state.filters.genreFilter;
export const getCinemaIdFilter = (state: RootState) => state.filters.cinemaIdFilter;

export const getFilteredMovies = createSelector(
    (state: RootState) => movieApi.endpoints.getMovies.select(state.filters.cinemaIdFilter)(state),
    getMovieNameFilter,
    getGenreFilter,
    ({ data: movies }, movieName, genreFilter) => {
        return (
            movies &&
            movies
                .filter((movie) =>
                    movieName ? movie.title.toLowerCase().includes(movieName.toLowerCase()) : true,
                )
                .filter((movie) => (genreFilter ? movie.genre === genreFilter : true))
        );
    },
);
