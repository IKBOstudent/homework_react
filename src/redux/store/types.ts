export const GENRES = {
    action: "Боевик",
    comedy: "Комедия",
    fantasy: "Фэнтези",
    horror: "Ужасы",
};

export type TGenre = keyof typeof GENRES;

export type TCartItem = {
    title: string;
    posterUrl?: string;
    genre: TGenre;
    count: number;
};

export type TMovie = {
    id: string;
    title: string;
    posterUrl?: string;
    releaseYear: number;
    description: string;
    genre: TGenre;
    rating: number;
    director: string;
    reviewIds: string[];
};

export type TReview = {
    id: string;
    name: string;
    text: string;
    rating: number;
};
