import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TReview, type TMovie } from "./types";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query<TMovie[], string | null>({
            query: (cinemaId) => (cinemaId ? `movies?cinemaId=${cinemaId}` : "movies"),
        }),
        getMovieById: builder.query<TMovie, string>({
            query: (movieId) => `movie?movieId=${movieId}`,
        }),
        getReviewsByMovieId: builder.query<TReview[], string>({
            query: (movieId) => `reviews?movieId=${movieId}`,
        }),
    }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery, useGetReviewsByMovieIdQuery } = movieApi;
