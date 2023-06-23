"use client";

import React from "react";

import styles from "./film.module.css";
import Image from "next/image";
import IconButton from "@/app/components/IconButton";
import { useTicketCount } from "@/app/hooks/useTicketCount";
import IconPicture from "@/app/assets/icon-picture.svg";
import { GENRES } from "@/app/page";

export default function FilmPage({ params }: { params: { id: number } }) {
    const { count, increment, decrement } = useTicketCount(0, 30);
    const movie = {
        title: "Властелин колец: Братство Кольца",
        posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
        releaseYear: 2001,
        description:
            "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
        genre: "fantasy",
        id: "2aT976Fs_Bek0e2ZR_05V",
        rating: 8,
        director: "Питер Джексон",
        reviewIds: ["M0bg9QY5gVtupNaglrmua", "w32kK5oV6UIr1ZHdkkMAn"],
    };

    let reviews = [
        {
            id: "6iaV-jUSjfl-gGk8EOdQ1",
            name: "Андрей",
            text: "Фильм хороший, но сюжет немного затянут",
            rating: 7,
        },
        {
            id: "-b9ezNy3oSoMpldgUl_IC",
            name: "Екатерина",
            text: "В целом, фильм понравился, но некоторые моменты были не очень понятны",
            rating: 6,
        },
        {
            id: "joAPS_G2-BgIIYQNmkWHh",
            name: "Сергей",
            text: "Мне не очень понравился фильм, но в нем есть несколько интересных моментов",
            rating: 5,
        },
    ];
    return (
        <div className={styles.root}>
            <div className={styles.film_card}>
                {movie.posterUrl ? (
                    <Image
                        className={styles.film_poster}
                        width={400}
                        height={500}
                        src={movie.posterUrl}
                        alt="film-poster"
                        priority
                    />
                ) : (
                    <div className={styles.film_poster}></div>
                )}
                <div className={styles.film_content}>
                    <div className={styles.film_header_content}>
                        <div className={styles.film_header_head}>
                            <h2 className={styles.film_header_title}>{movie.title}</h2>
                            <div className={styles.buttons}>
                                <IconButton
                                    icon="minus"
                                    onClick={decrement}
                                    disabled={count === 0}
                                />
                                <span className={styles.count}>{count}</span>
                                <IconButton
                                    icon="plus"
                                    onClick={increment}
                                    disabled={count === 30}
                                />
                            </div>
                        </div>
                        <div className={styles.film_header_info_list}>
                            <div className={styles.film_header_info_item}>
                                <h4 className={styles.film_header_info_name}>Жанр:</h4>
                                <sub className={styles.film_header_info_value}>
                                    {GENRES[movie.genre]}
                                </sub>
                            </div>

                            <div className={styles.film_header_info_item}>
                                <h4 className={styles.film_header_info_name}>Год выпуска:</h4>
                                <sub className={styles.film_header_info_value}>
                                    {movie.releaseYear}
                                </sub>
                            </div>
                            <div className={styles.film_header_info_item}>
                                <h4 className={styles.film_header_info_name}>Рейтинг:</h4>
                                <sub className={styles.film_header_info_value}>{movie.rating}</sub>
                            </div>
                            <div className={styles.film_header_info_item}>
                                <h4 className={styles.film_header_info_name}>Режиссер:</h4>
                                <sub className={styles.film_header_info_value}>
                                    {movie.director}
                                </sub>
                            </div>
                        </div>
                    </div>
                    <div className={styles.film_main_content}>
                        <h4 className={styles.film_main_head}>Описание</h4>
                        <p className={styles.film_main_description}>{movie.description}</p>
                    </div>
                </div>
            </div>

            {reviews.length > 0 &&
                reviews.map((review, i) => (
                    <div key={review.id} className={styles.review_section}>
                        <div className={styles.review_avatar}>
                            <IconPicture className={styles.review_icon} />
                        </div>
                        <div className={styles.review_content}>
                            <div className={styles.review_header}>
                                <h3 className={styles.review_name}>{review.name}</h3>
                                <div className={styles.review_rating}>
                                    <h4>Оценка:</h4>
                                    <b>{review.rating}</b>
                                </div>
                            </div>
                            <p className={styles.review_text}>{review.text}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
