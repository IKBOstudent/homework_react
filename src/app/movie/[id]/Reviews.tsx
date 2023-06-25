import styles from "./reviews.module.css";

import IconPicture from "@/assets/icon-picture.svg";
import { useGetReviewsByMovieIdQuery } from "@/redux/store/api";

export default function Reviews({ movieId }: { movieId: string }) {
    const { data: reviews = [], isFetching, isError } = useGetReviewsByMovieIdQuery(movieId);

    if (isFetching) {
        return <div className={`card ${styles.review_fallback}`}>Идет загрузка отзывов...</div>;
    }

    if (isError) {
        return <div className={`card ${styles.review_fallback}`}>Произошла ошибка</div>;
    }

    if (reviews.length === 0) {
        return <div className={`card ${styles.review_fallback}`}>Отзывов не найдено</div>;
    }

    return reviews.map((review) => (
        <div key={review.id} className={`card ${styles.review_section}`}>
            <div className={styles.review_avatar}>
                <IconPicture />
            </div>
            <div className={styles.review_content}>
                <div className={styles.review_header}>
                    <h3>{review.name}</h3>
                    <div className={styles.review_rating}>
                        <h4>Оценка:</h4>
                        <b>{review.rating}</b>
                    </div>
                </div>
                <p>{review.text}</p>
            </div>
        </div>
    ));
}
