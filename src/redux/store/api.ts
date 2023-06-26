import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TReview, type TMovie } from "./types";
import { IDropdownItem } from "@/app/page";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    endpoints: (builder) => ({
        getMovies: builder.query<TMovie[], string | null | undefined>({
            query: (cinemaId) =>
                cinemaId ? `/movies?cinemaId=${cinemaId}` : "/movies",
        }),
        getMovieById: builder.query<TMovie, string>({
            query: (movieId) => `/movie?movieId=${movieId}`,
        }),
        getReviewsByMovieId: builder.query<TReview[], string>({
            query: (movieId) => `/reviews?movieId=${movieId}`,
        }),

        getCinemas: builder.query<IDropdownItem[], void>({
            query: () => `/cinemas`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieByIdQuery,
    useGetReviewsByMovieIdQuery,
    useGetCinemasQuery,
} = movieApi;
