import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import s from './Reviews.module.css';

import { getMovieReview } from '../../services/apiService';

export default function Reviews() {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getMovieReview(id).then(res => {
            setReviews(res);
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {loading && <Loader />}

            {reviews && reviews.results.length > 0 ? (
                <ul className={s.list}>
                    {reviews.results.map(review => (
                        <li key={review.id} className={s.item}>
                            <h4>Author: {review.author}</h4>
                            <p className={s.content}>Review: {review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={s.resultTitle}>We don't have any reviews for this film.</p>
            )}
        </>
    );
}
